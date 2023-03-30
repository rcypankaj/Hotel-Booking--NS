let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");
let bookBtn =document.querySelector("#book-btn")
document.addEventListener("DOMContentLoaded", () => {
  const bookNowForm = document.querySelector("#bookNow-form");

  bookNowForm.addEventListener("click", (e) => {
    e.preventDefault();
    // rest of your code goes here
  });
});
//console.log(bookNowForm);
//bookBtn.addEventListener("click", () => {
  //bookNowForm.classList.add("active");
//});



window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
/*popup button start-for login successful-*/
let popup = document.getElementById("popup");

        function openPopup(){
            popup.classList.add("open-popup");
        }
        function closePopup(){
            popup.classList.remove("open-popup");
        }
        /*pop up button ends*/

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnIneraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
function submitForm() {
  // Get form data
  const placeName = document.getElementById("placeName").value;
  const numOfGuests = document.getElementById("numOfGuests").value;
  const arrivalDate= document.getElementById("arrivalDate").value;
  const leavingDate= document.getElementById("leavingDate").value;


  // Set form data
  document.getElementById("display-placeName").value = placeName;
  document.getElementById("display-numOfGuests").value = numOfGuests;
  document.getElementById("display-arrivalDate").value = arrivalDate;
  document.getElementById("display-leavingDate").value = leavingDate;
   document.getElementById("display-form").style.display = "block";
  
}

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnIneraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
