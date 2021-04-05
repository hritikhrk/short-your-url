function copyURI(event) {
    event.preventDefault();
    navigator.clipboard.writeText(event.target.getAttribute('href')).then(() => {
        alert("Copied");
    }, () => {
        alert("Copied Failed");
    });
}