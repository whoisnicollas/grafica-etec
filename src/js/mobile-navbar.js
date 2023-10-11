class MobileNavbar {
    constructor(mobileMenu, navlist, navlinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelector(navlinks);
        this.activeClass = "active";
    }


addClickEvent() {
    this.mobileMenu.addEventListener("click", () => console.log
    ("Hey"));
  }


init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
  }
}

const MobileNavbar = new MobileNavbar ( 
    ".mobile-menu"
    ".nav-list"
    ".nav-list li"
);

mobileNavbar.init();
