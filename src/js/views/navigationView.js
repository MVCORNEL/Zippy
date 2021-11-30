class NavigationView {

    _parentElement = document.querySelector('.nav');
    _navHeight = this._parentElement.getBoundingClientRect().height;

    constructor(page) {
        this.#activateHamburgerMenu();
        this.#setStickyNavigation(page);
    }

    #activateHamburgerMenu() {
        document.addEventListener("DOMContentLoaded", function () {
            const toggle = document.querySelector('#hamburger__cb');
            const items = document.querySelectorAll('.nav__link');
            toggle.addEventListener('click', function () {
                items.forEach((item) => {
                    item.classList.toggle('active');
                });
            });
        });
    }

    #setStickyNavigation(page) {
        let section;
        switch (page) {
            case 'index':
                section = document.querySelector('.header');
                break;
            case 'jobify':
                section = document.querySelector('.section-filter');
                break;
            case 'about':
                section = document.querySelector('.header');
                break;
            case 'contact':
                section = document.querySelector('.map');
                break;
            default:
                return;
        }

        const stickyNav = function (entries) {
            //only one entry because there is only one threshold
            const [entry] = entries;
            if (!entry.isIntersecting) {
                //I think is very important to add the padding before seting the stkiky, if not some loops may occur / not 100% sure
                document.body.style.paddingTop = `${this._parentElement.getBoundingClientRect().height}px`;
                this._parentElement.classList.add('sticky');
             
            } else {
                //I think is very important to add the padding before seting the stkiky, if not some loops may occur / not 100% sure
                document.body.style.paddingTop = `0px`;
                this._parentElement.classList.remove('sticky');
            
            }
        };

        const observer = new IntersectionObserver(stickyNav.bind(this), {
            root: null,
            threshold: 0,
            rootMargin: '0px',
        });
        observer.observe(section);
    }
}

export default NavigationView;