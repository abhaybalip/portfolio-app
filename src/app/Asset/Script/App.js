


// manage app-main top margin
window.addEventListener('load', function () {
    document.querySelector('.app-main').style.marginTop =
    document.querySelector('.app-nav').clientHeight + 'px'
})

window.addEventListener('resize', function () {
    document.querySelector('.app-main').style.marginTop =
    document.querySelector.clientHeight + 'px'
})

// manage goto top button visibility
window.addEventListener('scroll', function (ev) {
    if (this.window.scrollY > 100) {
        this.document.document.querySelector('.nav-top-b').style.visibility = 'visible';
        setTimeout(() => {
            this.document.querySelector('.nav-top-b').style.visibility = 'hidden';
        }, 3000);
    }
})

