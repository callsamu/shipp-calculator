export function onShareButtonClick(e: Event) {
    if (!navigator.canShare) {
        alert("Your browser does not support this feature.")
        return;
    }

    try {
        navigator.share({
            url: location.toString()
        });
    } catch (err) {
        console.log(err);
    }
}
