let navbar = document.querySelector(".navbar")
let navbarList = document.querySelector(".nav-list");
let navItems = document.getElementsByClassName("nav-list-item")
let hamburgerMenu = document.querySelector(".hamburger-menu");
let status = true;



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
      })
   }
);


/* TAGS */

let tagsContainer = document.getElementsByClassName("tags-container")[0];
let arrow = document.getElementsByClassName("arrow")[0];

console.log(tagsContainer);
console.log(arrow);

function showOrHideTags() {
   tagsContainer.classList.toggle("js-tag");

};

arrow.addEventListener("click", event => {
   arrow.classList.toggle("js-arrow");
   showOrHideTags();
})

