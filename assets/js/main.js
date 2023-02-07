/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");
    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
//*=================================================Form Validation=& Form Submission====================================*
//email submition
//form validations
document.querySelector(".button--send").addEventListener("click", function(event) {
  event.preventDefault();
  let fromcheck="";
  let x = document.forms["myForm"]["name"].value;
  let y = document.forms["myForm"]["email"].value;
  let z = document.forms["myForm"]["message"].value;
  if (x === "") {
    fromcheck = 'false';
    alert("Please fill out your name");
  } else if (y === "" || !y.endsWith(".com")) {
    fromcheck = 'false';
    alert("EmailID is Invalid..");
  } else if (z === ""){
    fromcheck = 'false';
    alert("Minimum characters needed.");
  } else {
    fromcheck = 'true';
  }
  
  // Get the form data
  if(fromcheck=="true"){
  var formData = new FormData(document.getElementById("myForm"));
  
  fetch("https://getform.io/f/a96105f5-bf41-406b-b302-de09d3a2411b", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => {
          window.location.href = "./assets/pages/thanks.html";
          document.forms["myForm"]["name"].value='';
          document.forms["myForm"]["email"].value='';
          document.forms["myForm"]["message"].value='';
         })// alert("Thank you! I will get back you ASAP.")
        .catch(error =>  alert("Oops... Something went wrong. " ));
      }
     // else { alert("Inputs are In-valid..")}
         });

//============================================================pic zoom out================================================
  const elements = document.querySelectorAll('.home__img');

elements.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
   // this.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  });
  element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
 //   this.style.boxShadow = 'none';
  });
}); 

//===========================================================Nav Logo======================================
const elements1 = document.querySelectorAll('.nav__logo');

elements1.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  //  this.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  });
  element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
   // this.style.boxShadow = 'none';
  });
}); 
//======================================================nav item=============================================
const elements2 = document.querySelectorAll('.nav__item');

elements2.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  //  this.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  });
  element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
   // this.style.boxShadow = 'none';
  });
}); 
//====================================================home-social======================================================
const elements3 = document.querySelectorAll('.home__social-icon');

elements3.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.2)';
    //this.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
  });
  element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
   /// this.style.boxShadow = 'none';
  });
}); 
//====================================================contactme======================================================
const elements4 = document.querySelectorAll('.button--flex1');

elements4.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.8)';
  });
  element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
}); 
//=====================================================about__img=======================================================
const elements5 = document.querySelectorAll('.about__img');

elements5.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 1)';
  });
  element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = 'none';
  });
}); 
