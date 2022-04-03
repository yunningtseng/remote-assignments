// > toggle navbar
let navImage = document.getElementById("nav__image");
let navItemMobile = document.querySelector(".nav__item--mobile");

navImage.addEventListener("click", () => {
  if (navItemMobile.style.display !== "block") {
    navItemMobile.style.display = "block";
    navImage.src = "img/x.png";
  } else {
    navItemMobile.style.display = "none";
    navImage.src = "img/menu.png";
  }
});

// > click text
let contextMessage = document.getElementById("context__message");

contextMessage.addEventListener("click", () => {
  contextMessage.textContent = "Have a Good Time!";
});

// > toggle box
let contexBtn = document.querySelector(".contex__btn");
let contextSection2 = document.querySelector(".context__section2");

contexBtn.addEventListener("click", () => {
  if (contextSection2.style.display !== "block") {
    contextSection2.style.display = "block";
  } else {
    contextSection2.style.display = "none";
  }
});
