import Logo from './logo.png'
import homePage from './homePage'
import aboutPage from './aboutPage';
import menuPage from './menuPage';
import contactPage from './contactPage';

function navBar() {
    const logoImg = new Image();
    logoImg.src = Logo;

    const content = document.getElementById("content");

    //create nav bar elements
    //have to append as we go
    const navBar = document.createElement("div");
    navBar.id = "nav-bar";
    content.appendChild(navBar);

    const home = document.createElement("ul");
    const homeText = document.createElement("div");
    homeText.textContent = "home";
    homeText.className = "text";
    home.appendChild(homeText);
    navBar.appendChild(home);


    const about = document.createElement("ul");
    const aboutText = document.createElement("div");
    aboutText.textContent = "about";
    aboutText.className = "text";
    about.appendChild(aboutText);
    navBar.appendChild(about);

    const logo = document.createElement("ul");
    logo.id = "logo";
    logo.appendChild(logoImg);
    navBar.appendChild(logo);

    const menu = document.createElement("ul");
    const menuText = document.createElement("div");
    menuText.textContent = "menu";
    menuText.className = "text";
    menu.appendChild(menuText);
    navBar.appendChild(menu);

    const contact = document.createElement("ul");
    const contactText = document.createElement("div");
    contactText.textContent = "contact";
    contactText.className = "text";
    contact.appendChild(contactText);
    navBar.appendChild(contact);

    //add event to each link
    const navText = document.querySelectorAll(".text");
    navText.forEach((nav) => {
        nav.addEventListener("mouseover", () => {
            nav.className = "temp-text";
            const allText = document.querySelectorAll(".text");
            allText.forEach((textItem) => {
                textItem.style.color = "rgb(224, 223, 220)";
            })
        });
        nav.addEventListener("mouseout", () => {     
            const allText = document.querySelectorAll(".text");
            allText.forEach((textItem) => {
                textItem.style.color = "black";
            })
            nav.className = "text";
        });
        nav.addEventListener("click", () => {
            //check text content then call corresponding page
            if(nav.textContent == "home") {
                const centerWrapper = document.getElementById("center-wrapper");
                centerWrapper.remove();
                homePage();
            }
            if(nav.textContent == "about") {
                const centerWrapper = document.getElementById("center-wrapper");
                centerWrapper.remove();
                aboutPage();
            }
            if(nav.textContent == "menu") {
                const centerWrapper = document.getElementById("center-wrapper");
                centerWrapper.remove();
                menuPage();
            }
            if(nav.textContent == "contact") {
                const centerWrapper = document.getElementById("center-wrapper");
                centerWrapper.remove();
                contactPage();                
            }
        });
    });
}

export default navBar;