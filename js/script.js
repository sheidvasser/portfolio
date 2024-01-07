let links = document.querySelectorAll('a');
let nav = document.querySelector('.nav');
let paragraphWidth = 0;
let dividerr = document.querySelector('.divider');
let dividerWrapper = document.querySelector('.divider__wrapper');
let dividerLine = document.querySelector('.divider__line');

pageNotFound();
window.addEventListener('resize', () => {
    dividerSkills();
});
divider();
if (dividerLine != null) dividerSkills(); else false;

// If href has no any real links
function pageNotFound() {
    links.forEach(element => {
        let attr = element.getAttribute('href');
        if (attr == '#' || attr == '') {
            element.setAttribute('href', 'pages/404.html');
        }
    });
}

// Height of divider
function divider() { dividerr != null ? dividerr.style.height = `${(dividerWrapper.offsetHeight + dividerLine.offsetHeight) * 1.2}px` : false }

// Width of list of skills. Repeating of the skills that depends on window's width
function dividerSkills() {
    let words = ['Develop', 'Optimize', 'Update', 'WordPress'];
    cycleForWords();
    function cycleForWords() {
        let widthOfAllSkills = 0;
        for (let i = 0; i < words.length; i++) {
            let element = words[i];
            dividerLine.innerHTML += (`<p class="skill-of-divider">${element}</p>`);
        }
        let allTheWords = document.getElementsByClassName('skill-of-divider');
        for (let i = 0; i < allTheWords.length; i++) {
            let element = allTheWords[i];
            widthOfAllSkills += element.offsetWidth;
        }
        if (widthOfAllSkills < window.innerWidth) {
            widthOfAllSkills = 0;
            cycleForWords();
        }
    }
}

// Project's loading
let wrapper = document.querySelector('.projects__load-more');
let button = document.querySelector('.load-more');
let productLength = document.querySelectorAll('.projects__card').length;
let items = 4;
if (productLength <= 4) {
    button.style.display = 'none';
}
wrapper.addEventListener('click', () => {
    items += 4;
    const array = Array.from(document.querySelector('.projects__card-wrapper').children);
    console.log(array);
    const visibleItems = array.slice(0, items);
    visibleItems.forEach(element => { element.classList.add('is-visible') });
    if (visibleItems.length == productLength) {
        button.style.display = 'none';
    }
})

// Hamburger animation, navbar menu animation
let hamburger = document.querySelector('.hamburger-button');
let navbar = document.querySelector('.nav__list');
let entirePage = document.querySelector('body');
let navWrapper = document.querySelector('.nav__wrapper');
hamburger.addEventListener('click', () => {
    let currentState = hamburger.getAttribute('data-state');
    if (!currentState || currentState == 'closed') {
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('data-state', 'opened');
        navbar.style.transform = 'translateY(0)';
        entirePage.style.overflowY = 'hidden';
        navWrapper.style.marginTop = '100px';
    } else {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('data-state', 'closed');
        navbar.style.transform = 'translateY(-100%)';
        entirePage.style.overflowY = 'scroll';
        navWrapper.style.marginTop = '0px';
    }
})
