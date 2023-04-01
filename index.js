let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

const popupSucces = document.querySelector(".modal");
const popupClose = document.querySelector(".close");
console.log(popupClose);
const bookNowForm = document.querySelector("#bookNow-form");
const loginPopup = document.getElementById("login-form");

// modal Booking element
const modalHeading = document.getElementById("modal-headind");
const modalStatus = document.getElementById("modal-staus");
const modalLocation = document.getElementById("modal-location");
const modalDays = document.getElementById("modal-days");
const modalArrivingDate = document.getElementById("modal-arrivingDate");
const modalLeavingDate = document.getElementById("modal-leavingDate");

// modal login Element
const modalUsername = document.getElementById("username");
const modalUserPassword = document.getElementById("password");

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

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
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
  const arrivalDate = document.getElementById("arrivalDate").value;
  const leavingDate = document.getElementById("leavingDate").value;

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

// book now submit handler
bookNowForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const whereTo = e.target.placeName.value;
  const howMany = e.target.howMany.value;
  const arrivingDate = e.target.arrivingDate.value;
  const leavingDate = e.target.leavingDate.value;

  if (whereTo !== "" && howMany !== "") {
    modalHeading.innerText = "Booking Status";
    modalStatus.innerText = "Booking successfully😊😊";
    modalLocation.innerText = `Location: ${whereTo}`;
    modalDays.textContent = `Days: ${howMany} days`;
    modalArrivingDate.innerText = `Arriving Date: ${arrivingDate}`;
    modalLeavingDate.innerText = `Leaving Date: ${leavingDate}`;
    popupSucces.style.display = "block";
  }
  popupClose.addEventListener("click", (e) => {
    popupSucces.style.display = "none";
  });
  // console.log(whereTo, howMany, arrivingDate, leavingDate);
});

/// login popup
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = modalUsername.value;
  username = username.substring(0, username.indexOf("@"));
  console.log(username);
  const password = modalUserPassword.value;
  popupSucces.style.display = "block";

  loginForm.classList.remove("active");
  modalHeading.innerText = "Login Status";
  modalStatus.innerText = "Login successfully😊😊";
  modalLocation.innerText = `🙏Welcome ${username}🙏`;
  modalDays.textContent = "";
  modalArrivingDate.innerText = "";
  modalLeavingDate.innerText = "";

  popupClose.addEventListener("click", (e) => {
    popupSucces.style.display = "none";
  });
  console.log(username, password);
});
