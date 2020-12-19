let navbar = document.querySelector(".navbar")
let navbarList = document.querySelector(".nav-list");
let navItems = document.getElementsByClassName("nav-list-item")
let hamburgerMenu = document.querySelector(".hamburger-menu");
let status = true;

let tagsContainer = document.getElementsByClassName("tags-container")[0];
let arrow = document.getElementsByClassName("arrow")[0];

hamburgerMenu.addEventListener("click", () => {
   if (status) {
      for (let element of navItems) {
         element.classList.add("js-nav-list-item-hide");
      }
      status = false;
   }

   hamburgerMenu.classList.toggle("js-rotate");
   for (let element of hamburgerMenu.children) {
      element.classList.toggle("js-color");
   }

   navbar.classList.toggle("js-navbar");

   for (let element of navItems) {
      element.classList.toggle("js-nav-list-item-show")
   }
});


function changeZindex() {
   navItems[3].classList.toggle("js-search");
}


arrow.addEventListener("click", event => {
   arrow.classList.toggle("js-arrow");
   tagsContainer.classList.toggle("js-tag");
   changeZindex();
});

['orientationchange', 'resize'].forEach(
   event => {
      window.addEventListener(event, () => {
         if (navItems[0].classList.contains("js-nav-list-item-hide")) {
            if (window.screen.availWidth > 730) {
               for (let element of navItems) {
                  element.classList.remove("js-nav-list-item-hide");
                  element.classList.remove("js-nav-list-item-show");
               }
               navbar.classList.remove("js-navbar");
               hamburgerMenu.classList.remove("js-rotate");
               for (let element of hamburgerMenu.children) {
                  element.classList.remove("js-color");
               }
            }
            status = true;
         }

            if (arrow.classList.contains("js-arrow")) {
               arrow.classList.remove("js-arrow");
               tagsContainer.classList.remove("js-tag");
               changeZindex();
            }
      })
   }
);
