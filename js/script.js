class Dynamic {
    constructor(options) {
        const {
            link,
            header,
            navbar
        } = options;
        this.links = document.querySelectorAll(link);
        this.header = document.querySelector(header);
        this.nav = document.querySelector(navbar);
        this.pageNotFound();
        this.headerHeight();
        window.addEventListener('resize', () => {
            this.headerHeight();
        });
    }
    pageNotFound() {
        this.links.forEach(element => {
            let attr = element.getAttribute('href');
            if (attr == '#') {
                element.setAttribute('href', 'pages/404.html');
            }
        });
    }
    headerHeight() {
        if (document.contains(this.nav)) {
            this.header.style.height = `${window.innerHeight - this.nav.offsetHeight}px`;
            if (this.header.offsetHeight > 700) {
                this.header.style.height = `${window.innerHeight - this.nav.offsetHeight}px`;
            } else if (this.header.offsetHeight <= 700) {
                this.header.style.height = '700px';
            }
        } else {
            this.header.style.height = '100vh';
        }
    }
}
const object = new Dynamic({
    link: 'a',
    header: '.header-wrapper',
    navbar: '.nav'
})