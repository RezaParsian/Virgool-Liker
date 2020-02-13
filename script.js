function doti() {
    var a = document.getElementsByClassName("btn-like js-like");
    for (var i = 0; i < a.length; i++) {
        var ca = a[i].className;
        if (ca == "btn-like js-like ") {
            a[i].click();
        }
    }
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 850) {
        doti();
    }
};

doti();