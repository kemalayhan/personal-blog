let navbar = document.querySelector(".navbar")
let hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
   hamburgerMenu.classList.toggle("js-rotate");
   for(let element of hamburgerMenu.children) {
      element.classList.toggle("js-color");
   }
   if(navbar.classList.contains("js-hide")) {
      navbar.classList.remove("js-hide");
   }else {
      navbar.classList.add("js-hide")
   }
});


