//set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

//make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
const bodyEl = document.querySelector("body");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  bodyEl.classList.toggle("no-scroll");
});

///////////////////////////////////////////////////////////
// Smoth scrolling animation

const allLinks = document.querySelectorAll("a:link"); // Selects all anchor elements that have href as a property

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevents the default action of the link

    const href = link.getAttribute("href"); // Reads the href attribute of the link

    // Scroll back to top ,the ones that have only #
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to the section
    if (href !== "#" && href.startsWith("#")) {
      const selectionEl = document.querySelector(href); //we get the element section where we want to go
      selectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open"); //removing the nav-open if it is in the header
  });
});

////////////////////////////////////////////////////
//Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");
const header = document.querySelector(".header");
console.log(header);
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      header.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      header.classList.remove("sticky");
    }
  },
  {
    root: null, //inside the viewport
    theshold: 0, //we will have and event as soon as 0% of the herosection is inside the viewport
    //if its 1 means when the section hero is completely inside the viewport
    rootMargin: "-180px", //is has to be px, and its the height of the navigation bar
  }
);
obs.observe(sectionHeroEl);

//Customers infinite carousel
const carousels = document.querySelectorAll(".customers-list");

//looping through each customer
carousels.forEach((carousel) => {
  //getting the inner div of each carousel
  const carouselInner = carousel.querySelector(".customers-list div");
  //get the inner content (images) from the carousel
  const carouselContent = Array.from(carouselInner.children);
  //loop through each item(image)
  carouselContent.forEach((item) => {
    //duplicate each item
    const duplicatedItem = item.cloneNode(true);
    //append the duplicated item to the carousel
    carouselInner.appendChild(duplicatedItem);
    //add carousel animation
    carouselInner.style.animation = "move 50s linear infinite";
  });
});

//// Function to handle the accordion logic in footer
// Selects all elements with the class .footer-accordion.
const accordions = document.querySelectorAll(".footer-accordion");

//Looping through each .footer-accordion element.
accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Toggle the dropdown arrow
    const accordionBtn = this.querySelector(".dropdown-arrow");
    accordionBtn.classList.toggle("dropdown-arrow--active");

    // Toggle the display of the associated footer-section-details
    const footerDetails = this.nextElementSibling;
    // or any breakpoint you use

    if (footerDetails.style.display === "block") {
      footerDetails.style.display = "none";
    } else {
      footerDetails.style.display = "block";
    }
  });
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show button after scrolling down 300px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll back to top
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
