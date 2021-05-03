const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let midpage = document.getElementById("middle-img");
midpage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let navItems = document.querySelectorAll("nav a");
navItems.forEach((item, index) => {
  let crunch = index +1;
  item.style.color="green";
  item.innerHTML = siteContent["nav"][`nav-item-${crunch}`];
});

let navBar = document.querySelector("nav");
let neoFirst = document.createElement("a");
neoFirst.innerHTML= "First";
neoFirst.style.color = "green";
navBar.prepend(neoFirst);

let neoLast = document.createElement("a");
neoLast.innerHTML= "Last";
neoLast.style.color = "green";
navBar.appendChild(neoLast);


let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"];
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

let topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].children[0].innerHTML = siteContent["main-content"]["features-h4"];
topContent[0].children[1].innerHTML = siteContent["main-content"]["features-content"];
topContent[1].children[0].innerHTML = siteContent["main-content"]["about-h4"];
topContent[1].children[1].innerHTML = siteContent["main-content"]["about-content"];

let bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].children[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContent[0].children[1].innerHTML = siteContent["main-content"]["services-content"];
bottomContent[1].children[0].innerHTML = siteContent["main-content"]["product-h4"];
bottomContent[1].children[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContent[2].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
bottomContent[2].children[1].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];
let contactLines = document.querySelectorAll(".contact p");
contactLines[0].innerHTML = siteContent["contact"]["address"];
contactLines[0].innerHTML = siteContent["contact"]["phone"];
contactLines[0].innerHTML = siteContent["contact"]["email"];

let copyright = document.querySelector("footer p");
copyright.innerHTML = siteContent["footer"]["copyright"];