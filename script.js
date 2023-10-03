function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}
function scrollToClass(featured) {
    var elements = document.getElementsByClassName(featured);
    if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
}
function scrollToClass(recent) {
    var elements = document.getElementsByClassName(recent);
    if (elements.length > 0) {
        elements[0].scrollIntoView({ behavior: 'smooth' });
    }
}
