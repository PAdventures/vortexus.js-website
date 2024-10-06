'use client';

import { useEffect, useState } from 'react';
import { formatDate } from '../../lib/utils.ts';
import EditPageLink from '../others/EditPageLink';
import { CommitInfo, getCommitInfo } from '../../app/docs/actions.ts';
import { usePathname } from 'next/navigation';

export default function FooterBar() {
    const pathname = usePathname();
    const [commitInfo, setCommitInfo] = useState<CommitInfo | null>(null);

    useEffect(() => {
        const updateCommitInfo = async () => {
            setCommitInfo(await getCommitInfo(pathname))
        }

        if (process.env.NODE_ENV === "production") {
            updateCommitInfo()
        } else {
            setCommitInfo({ lastUpdated: (new Date(Date.now())).toISOString(), committer: "PAdventures" })
        }
    }, [pathname])

	return (
		<div className="flex h-[10vh] w-full items-center justify-between">
			<EditPageLink />
            {commitInfo !== null && <p>{process.env.NODE_ENV !== "production" ? "(Mock data) ": ""}Last updated on {formatDate(commitInfo.lastUpdated)} by {commitInfo.committer}</p>}
			{commitInfo === null && <p>No commit history found</p>}
		</div>
	);
}
