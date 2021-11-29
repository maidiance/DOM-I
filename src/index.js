const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

// Links
const links = document.querySelectorAll('nav a');
// Turn links into an array
const linksArr = Array.from(links);

// Nav
links.forEach(function(link, index){
  // Add italic class to links
  link.className = 'italic';
  // Update textContent
  linksArr[index].textContent = siteContent.nav[`nav-item-${(index + 1)}`];
});

// Header image
const header = document.querySelector('header');
const imageLogo = header.querySelector('img');
imageLogo.src = siteContent.images['logo-img'];

// Cta
const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta.h1;
h1.nextElementSibling.textContent = siteContent.cta.button;
const cta = document.querySelector('.cta');
const ctaImg = cta.querySelector('#cta-img');
ctaImg.src = siteContent.images['cta-img'];

// Main-content
const mainContent = document.querySelector('.main-content');
const topContent = mainContent.querySelector('.top-content');

// Features
const features = topContent.querySelector('.text-content:nth-of-type(1)');
const featuresHeader = features.querySelector('h4');
const featuresText = features.querySelector('p');
featuresHeader.textContent = siteContent['main-content']['features-h4'];
featuresText.textContent = siteContent['main-content']['features-content'];

// About
const about = topContent.querySelector('.text-content:nth-of-type(2)');
const aboutHeader = about.querySelector('h4');
const aboutText = about.querySelector('p');
aboutHeader.textContent = siteContent['main-content']['about-h4'];
aboutText.textContent = siteContent['main-content']['about-content'];

// Middle
const middle = mainContent.querySelector('#middle-img');
middle.src = siteContent.images['accent-img'];

// Bottom
const bottom = mainContent.querySelector('.bottom-content');

// Services
const services = bottom.querySelector('.text-content:nth-of-type(1)');
const servicesHeader = services.querySelector('h4');
const servicesText = services.querySelector('p');
servicesHeader.textContent = siteContent['main-content']['services-h4'];
servicesText.textContent = siteContent['main-content']['services-content'];

// Product
const product = bottom.querySelector('.text-content:nth-of-type(2)');
const productHeader = product.querySelector('h4');
const productText = product.querySelector('p');
productHeader.textContent = siteContent['main-content']['product-h4'];
productText.textContent = siteContent['main-content']['product-content'];

// Vision
const vision = bottom.querySelector('.text-content:nth-of-type(3)');
const visionHeader = vision.querySelector('h4');
const visionText = vision.querySelector('p');
visionHeader.textContent = siteContent['main-content']['vision-h4'];
visionText.textContent = siteContent['main-content']['vision-content'];

// Contact
const contact = document.querySelector('.contact');
const contactHeader = contact.querySelector('h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];
// Address
const address = contact.querySelector('p:nth-of-type(1)');
address.textContent = siteContent['contact']['address'];
// Phone
const phone = contact.querySelector('p:nth-of-type(2)');
phone.textContent = siteContent['contact']['phone'];
// Email
const email = contact.querySelector('p:nth-of-type(3)');
email.textContent = siteContent['contact']['email'];

// Footer
const footer = document.querySelector('footer');
footer.classList.add('bold');
footer.querySelector('a').textContent = siteContent['footer']['copyright'];