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
        })
    }
    pageNotFound() {
        this.links.forEach(element => {
            let attr = element.getAttribute('href');
            if (attr == '#') {
                element.setAttribute('href', 'pages/not-ready.html')
            }
        });
    }
    headerHeight() {
        this.header.style.height = `${window.innerHeight - this.nav.offsetHeight - 1}px`;
    }
}
const object = new Dynamic({
    link: 'a',
    header: '.header-wrapper',
    navbar: '.nav'
})