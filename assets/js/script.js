// myage = document.querySelector(".myAge")

// function checkAge() {
//     let date = Date();
//     console.log(date);
// }
// checkAge();


// document.querySelector(".hamburger-menu").addEventListener("click", function () {
//     const navLinks = document.getElementsByTagName("ul");
//     navLinks.classList.toggle('active');
// })

// document.addEventListener("DOMContentLoaded", function() {
//     let hamburger = document.querySelector(".hamburger-menu");
//     let navLinks = document.getElementsByTagName("ul");
//     let showBurger = document.querySelector(".mobile-nav-show");
//     let hideBurger = document.querySelector(".mobile-nav-hide");

//     hamburger.addEventListener("click", function() {
//         hideBurger.classList.toggle("active");
//         // navLinks.classList.toggle("active");
//     })

// })

// const hamburger = document.querySelector(".hamburger-menu");
// // console.log(hamburger)
// const navLink = document.getElementsByTagName("ul");
// // console.log(navLinks);

// hamburger.addEventListener('click', () => {
//     navLink.classList.toggle('active');
// })

// const showBurger = document.querySelector(".mobile-nav-show");
// const hideX = document.querySelector(".mobile-nav-hide");
// const lists = document.getElementsByTagName("ul");
// const both = document.querySelector(".mobile-nav-toggle");


// // function showHamburger() {
//     showBurger.addEventListener('click', () => {
//         hideX.classList.toggle("displays");
//         showBurger.classList.toggle("hide");

        
//         // lists.classList.contains('open') ? lists.classList.remove('open') : lists.classList.add('open');        
//     })
// // }

// hideX.addEventListener('click', () => {
//     hideX.classList.toggle("undisplays");
//     showBurger.classList.toggle("display");

//     // lists.classList.contains('open') ? lists.classList.remove('open') : lists.classList.add('open');        
// })



// Inside script.js
// const hamburger = document.querySelector(".hamburger");
// const navbar = document.querySelector("#navbar");

// hamburger.addEventListener("click", () => {
//     navbar.classList.toggle("active");
//     hamburger.classList.toggle("open");
// });


// const hamburger = document.querySelector(".hamburger-menu");
// const navList = document.querySelector(".navbar ul");
// const showBurger = document.querySelector(".mobile-nav-show");
// const hideX = document.querySelector(".mobile-nav-hide");

// // Set initial state
// hideX.style.display = "none";
// navList.style.display = "none";

// // Show menu
// showBurger.addEventListener('click', () => {
//     navList.style.display = "block";
//     showBurger.style.display = "none";
//     hideX.style.display = "inline-block";
// });

// // Hide menu
// hideX.addEventListener('click', () => {
//     navList.style.display = "none";
//     showBurger.style.display = "inline-block";
//     hideX.style.display = "none";
// });