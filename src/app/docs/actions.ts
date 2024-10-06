"use server";

export type CommitInfo = {
    lastUpdated: string;
    committer: string;
};

export async function getCommitInfo(pathname: string | null): Promise<CommitInfo | null> {
	const repoOwner = 'PAdventures';
	const repoName = 'vortexus.js-website';
	const filePath = `src${pathname}/page.tsx`

    if (!pathname) {
        return null;
    }

	const response = await fetch(
		`https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`,
		{
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
            next: {
                revalidate: 60 * 60 // Valid for 1 hour
            }
		},
	);

	const commits = await response.json();

	if (commits.length === 0) {
		return null;
	}

	const lastCommit = commits[0];

    if (!lastCommit || !lastCommit.commit || !lastCommit.commit.committer || !lastCommit.commit.committer.date || !lastCommit.commit.committer.name ) {
        return null;
    }

	return {
		lastUpdated: lastCommit.commit.committer.date,
		committer: lastCommit.commit.committer.name,
	};
}