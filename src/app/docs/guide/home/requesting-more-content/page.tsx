import DocumentationPage from "@/components/pages/DocumentationPage";
import Header1 from "@/components/pages/Header1";
import Paragraph from "@/components/pages/Paragraph";
import Bold from "@/components/pages/Bold";
import { Link } from "@/components/ui/link";
import { AlertDescription, AlertTip } from "@/components/ui/alert";

export default function RequestingMoreContent() {
    return (
        <DocumentationPage>
            <Header1>Requesting more content</Header1>
            <Paragraph>
                This guide is made for to help newcomers and experts to have the best experience as possible when developing with the Vortexus.js framework.
                Keeping this guide as up-to-date as possible is important to keep that goal, therefore adding more content is a top priority and even you can request for more content.
            </Paragraph>
            <Paragraph>
                To request for more content for the <Bold>guide</Bold>, head over to the<Link underline href="https://github.com/PAdventures/Vortexus.js/issues" text="issue tracker" /> and create a new issue.
                Make sure you select the &quot;Feature Request&quot; template to follow the correct format for issues as we are strict about keeping everything as readable as possible.
            </Paragraph>
            <AlertTip>
                <AlertDescription>
                    Remember that you are always free to<Link underline href="https://github.com/PAdventures/Vortexus.js/fork" text="fork the repository" /> and<Link underline href="https://github.com/PAdventures/Vortexus.js/pulls" text="make a pull request" /> if you want to add something to the guide yourself
                </AlertDescription>
            </AlertTip>
        </DocumentationPage>
    )
}