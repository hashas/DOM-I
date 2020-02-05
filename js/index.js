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

// nav

const myNav = document.querySelectorAll('a');

myNav[0].textContent = siteContent["nav"]["nav-item-1"];
myNav[1].textContent = siteContent["nav"]["nav-item-2"];
myNav[2].textContent = siteContent["nav"]["nav-item-3"];
myNav[3].textContent = siteContent["nav"]["nav-item-4"];
myNav[4].textContent = siteContent["nav"]["nav-item-5"];
myNav[5].textContent = siteContent["nav"]["nav-item-6"];

// cta

const myH1 = document.querySelector('h1');
myH1.textContent = siteContent["cta"]["h1"];

const myButton = document.querySelector('button');
myButton.textContent = siteContent['cta']['button'];

const headerimage = document.querySelector('#cta-img');
headerimage.src = siteContent['cta']['img-src'];

// main content

const htxt = document.querySelectorAll('h4');

htxt[0].textContent = siteContent["main-content"]["features-h4"];
htxt[1].textContent = siteContent["main-content"]["about-h4"];
htxt[2].textContent = siteContent["main-content"]["services-h4"];
htxt[3].textContent = siteContent["main-content"]["product-h4"];
htxt[4].textContent = siteContent["main-content"]["vision-h4"];

const ptxt = document.querySelectorAll('p');

ptxt[0].textContent = siteContent["main-content"]["features-content"];
ptxt[1].textContent = siteContent["main-content"]["about-content"];
ptxt[2].textContent = siteContent["main-content"]["services-content"];
ptxt[3].textContent = siteContent["main-content"]["product-content"];
ptxt[4].textContent = siteContent["main-content"]["vision-content"];

// middle image

const middleimg = document.querySelector('#middle-img');
middleimg.src = siteContent['main-content']['middle-img-src'];

// contact

htxt[5].textContent = siteContent['contact']['contact-h4'];
ptxt[5].textContent = siteContent['contact']['address'];
ptxt[6].textContent = siteContent['contact']['phone'];
ptxt[7].textContent = siteContent['contact']['email'];

// footer

ptxt[8].textContent = siteContent['footer']['copyright'];

// turn nav to green

myNav.forEach(element => element.style.color = 'green');

// add two items to nav

const newItems = document.querySelector('nav');

const social = document.createElement('a');

social.textContent = "Social";
social.href = '#';
social.style.color = 'green';

newItems.appendChild(social);


const home = document.createElement('a');

home.textContent = 'Home';
home.href = '#';
home.style.color = 'green';

newItems.prepend(home);