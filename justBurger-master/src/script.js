class justBurger {
  constructor(options) {
    const defaultOptions = {
      isOpen: () => {},
      isClose: () => {},
      animationSpeed: 400,
      activeClass: null,
      menuId: null,

    }
    this.options = Object.assign(defaultOptions, options);
    this.burger = document.getElementById('justBurger');
    if (!this.burger) {
      console.error(`Burger not found`);
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll('#justBurger').length > 1) {
      console.error(`The id justBurger must be unique on the page!`);
      return;
    }
  }

  init() {
    this.burger.style.setProperty('--burger-animation-time', `${this.options.animationSpeed / 1000}s`);

    if (this.burger.classList.contains('just-burger--open')) {
      this.burger.setAttribute('aria-expanded', true);
    } else {
      this.burger.setAttribute('aria-expanded', false);
    }

    if (this.options.menuId !== null) {
      this.burger.setAttribute('aria-controls', this.options.menuId);
    }

  }

  events() {
    this.burger.addEventListener('click', () => {
      if (!this.burger.classList.contains('just-burger--open')) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  open() {
    this.burger.classList.add('just-burger--open');
    if (this.options.activeClass !== null) {
      this.burger.classList.add(this.options.activeClass);
    }
    this.burger.setAttribute('aria-expanded', true);
    this.options.isOpen(this);
  }

  close() {
    this.burger.classList.remove('just-burger--open');
    if (this.options.activeClass !== null) {
      this.burger.classList.remove(this.options.activeClass);
    }
    this.burger.setAttribute('aria-expanded', false);
    this.options.isClose(this);
  }
}
