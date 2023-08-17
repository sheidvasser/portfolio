class Dynamic {
    constructor(options) {
        const {
            link,
            headerWrapper,
            header,
            nav
        } = options;
        this.links = document.querySelectorAll(link);
        this.headerWrapper = document.querySelector(headerWrapper);
        this.nav = document.querySelector(nav);
        this.header = document.querySelector(header);
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
        const {
            headerWrapper,
            header,
            nav
        } = this;
        if (document.contains(nav)) {
            let rect = header.getBoundingClientRect();
            let headerToWindowY = rect['y'];
            headerWrapper.style.height = `${window.innerHeight - nav.offsetHeight}px`;
            if (headerToWindowY + header.offsetHeight < window.innerHeight) {
                headerWrapper.style.height = `${window.innerHeight - nav.offsetHeight}px`;
                headerWrapper.style.display = 'flex';
                headerWrapper.style.flexDirection = 'column';
                headerWrapper.style.justifyContent = 'center';
            } else {
                headerWrapper.style.height = '100%';
                headerWrapper.style.display = 'block';
                headerWrapper.style.removeProperty('flex-direction');
                headerWrapper.style.removeProperty('justify-content');
            }
        } else {
            header.style.height = '100vh';
            header.style.justifyContent = 'center';
        }
    }
}
const object = new Dynamic({
    link: 'a',
    headerWrapper: '.header-wrapper',
    header: '.header',
    nav: '.nav'
})