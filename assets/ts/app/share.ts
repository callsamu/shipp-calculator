import * as params from "@params";
import { FormResult } from "./form";
import { renderTemplate } from "./template";

export function onShareButtonClick(results: FormResult) {
    let shareContent = params?.texts?.share;
    const shareText = (shareContent) ?
        renderTemplate(shareContent.text, {
            first: results.firstName,
            second: results.secondName,
            chance: results.chance,
        }) : null;

    return () => {

        if (!navigator.canShare) {
            alert("Your browser does not support this feature.")
            return;
        }

        try {
            navigator.share({
                url: location.toString(),
                title: shareContent?.title,
                text: shareText,
            });
        } catch (err) {
            console.log(err);
        }
    }
}
