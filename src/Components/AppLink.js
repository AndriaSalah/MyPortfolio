const AppLink=({ appLink, webLink, children })=> {
    const openAppOrWeb = () => {
        window.location.href = appLink;
        setTimeout(() => {
            if (!document.hidden) window.location.href = webLink;
        }, 1000);
    };

    return (
        <a onClick={openAppOrWeb} rel="noreferrer noopener">{children}</a>
    );
}
export default AppLink