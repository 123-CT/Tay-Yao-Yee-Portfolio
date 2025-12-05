const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const aboutMeButton = document.querySelector("#about-me-button");
const aboutMeSection = document.querySelector("#about-me");
const homeButton = document.querySelector("#home-button");
const homeSection = document.querySelector("#home");
const projectButton = document.querySelector("#project-button");
const projectSection = document.querySelector("#project");
const contactButton = document.querySelector("#contact-button");
const contactSection = document.querySelector("#contact");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//Helper function to determine whether to scroll or navigate
function scrollOrNavigate(sectionId) {
    const section = document.querySelector(sectionId);
    if(section) {
        //Section exists on this page then scroll
        section.scrollIntoView({behavior: "smooth"});
    } else {
        //Section does not exist then navigate to index.html#sectionId
        window.location.href = `index.html${sectionId}`;
    }
}

//Navigate to 'Home' section while clicking on 'Home' link
homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollOrNavigate("#home");
});

//Navigate to 'Project' section while clicking on 'Project' link
projectButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollOrNavigate("#project");
});

//Navigate to 'About Me' section while clicking on 'About Me' link
aboutMeButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollOrNavigate("#about-me");
});

//Navigate to 'Contact' section while clicking on 'Contact' link
contactButton.addEventListener("click", (event) => {
    event.preventDefault();
    scrollOrNavigate("#contact");
});