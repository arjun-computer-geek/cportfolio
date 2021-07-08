// nav link objects
const home = document.getElementById("home");
const work = document.getElementById("work");
const contact = document.getElementById("contact");
const about = document.getElementById("about");

// aside links
const workLinks = document.getElementById("work-links")
const contactLinks = document.getElementById("contact-links")
const aboutLinks = document.getElementById("about-links")

// tab folders object
let homeFolder = document.getElementById("home-folder");
let workFolder = document.getElementById("work-folder");
let aboutFolder = document.getElementById("about-folder");
let contactFolder = document.getElementById("contact-folder");
let asideMenu = document.getElementById("aside-menu-folder");

let headerTitle = document.getElementById("header-title");


// to hide any html element
const hide =  element => {
    element.style.display = "none"
}


// to show any html element
const show = (element, displayType) => {
    element.style.display = displayType
}


hide(workFolder)
hide(contactFolder)
hide(aboutFolder)
hide(asideMenu)


// -----------------------------
// home tab
// -----------------------------
home.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.href = `${document.location.pathname}#home-folder`;

  show(homeFolder, "block")
  hide(workFolder)
  hide(contactFolder)
  hide(aboutFolder)

  hide(asideMenu)

  home.setAttribute("class", `nav-link  nav-active`);
  work.setAttribute("class", `nav-link`);
  contact.setAttribute("class", `nav-link`);
  about.setAttribute("class", `nav-link`);

  headerTitle.innerText = "Home";
});


// -------------------------
// work tab
// -------------------------
work.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.href = `${document.location.pathname}#work-folder`;

  hide(homeFolder)
  show(workFolder, "block")
  hide(contactFolder)
  hide(aboutFolder)
  show(asideMenu, "flex")

  hide(xydus_music)
  hide(poar_algo)
 
  home.setAttribute("class", `nav-link`);
  work.setAttribute("class", `nav-link  nav-active`);
  contact.setAttribute("class", `nav-link`);
  about.setAttribute("class", `nav-link`);

  headerTitle.innerText = "Work";

  show(workLinks, "block")
  hide(contactLinks)
  hide(aboutLinks)
});


// ---------------------------
// contact tab
// ---------------------------
contact.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.href = `${document.location.pathname}#contact-folder`;

  hide(homeFolder)
  hide(workFolder)
  show(contactFolder, "block")
  hide(aboutFolder)
  show(asideMenu, "flex")

  hide(email_list)
  hide(social_links)

  home.setAttribute("class", `nav-link`);
  work.setAttribute("class", `nav-link`);
  contact.setAttribute("class", `nav-link nav-active`);
  about.setAttribute("class", `nav-link`);

  headerTitle.innerText = "Contact";

  hide(workLinks)
  show(contactLinks, "block")
  hide(aboutLinks)
});


// -------------------------
// about tab 
// --------------------------
about.addEventListener("click", (e) => {
  e.preventDefault();
  document.location.href = `${document.location.pathname}#about-folder`;

  hide(homeFolder)
  hide(workFolder)
  hide(contactFolder)
  show(aboutFolder, "block")
  show(asideMenu, "flex")

  hide(skills)
  hide(education)
  hide(bucket_list)

  home.setAttribute("class", `nav-link`);
  work.setAttribute("class", `nav-link`);
  contact.setAttribute("class", `nav-link`);
  about.setAttribute("class", `nav-link nav-active`);

  headerTitle.innerText = "About";

  hide(workLinks)
  hide(contactLinks)
  show(aboutLinks, "block")
});


// ------------------------------------
// work aside links
// ------------------------------------
const xydus_game = document.getElementById("xydus-game")
const xydus_music = document.getElementById("xydus-music")
const poar_algo = document.getElementById("poar-algo")

const xydus_gameLink = document.getElementById("xydus-game-link")
const xydus_musicLink = document.getElementById("xydus-music-link")
const poar_algoLink = document.getElementById("poar-algo-link")


xydus_gameLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#xydus-game`;

    show(xydus_game, "block")
    hide(xydus_music)
    hide(poar_algo)

    xydus_gameLink.setAttribute("class", "aside-link aside-active")
    xydus_musicLink.setAttribute("class", "aside-link")
    poar_algoLink.setAttribute("class", "aside-link")
})


xydus_musicLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#xydus-music`;

    hide(xydus_game)
    show(xydus_music, "block")
    hide(poar_algo)

    xydus_gameLink.setAttribute("class", "aside-link")
    xydus_musicLink.setAttribute("class", "aside-link  aside-active")
    poar_algoLink.setAttribute("class", "aside-link")
})


poar_algoLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#poar-algo`;

    hide(xydus_game)
    hide(xydus_music)
    show(poar_algo, "block")

    xydus_gameLink.setAttribute("class", "aside-link")
    xydus_musicLink.setAttribute("class", "aside-link")
    poar_algoLink.setAttribute("class", "aside-link  aside-active")
})


// -----------------------------
// contact aside links
// -----------------------------
const write_here = document.getElementById("write-here")
const email_list = document.getElementById("email-list")
const social_links = document.getElementById("social-links")

const write_hereLink = document.getElementById("write-here-link")
const email_listLink = document.getElementById("email-list-link")
const social_linksLink = document.getElementById("social-links-link")


write_hereLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#write-here`;

    show(write_here, "block")
    hide(email_list)
    hide(social_links)

    write_hereLink.setAttribute("class", "aside-link aside-active")
    email_listLink.setAttribute("class", "aside-link")
    social_linksLink.setAttribute("class", "aside-link")
})


email_listLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#email-list`;

    hide(write_here)
    show(email_list, "block")
    hide(social_links)

    write_hereLink.setAttribute("class", "aside-link")
    email_listLink.setAttribute("class", "aside-link  aside-active")
    social_linksLink.setAttribute("class", "aside-link")
})


social_linksLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#social-links`;

    hide(write_here)
    hide(email_list)
    show(social_links, "block")

    write_hereLink.setAttribute("class", "aside-link")
    email_listLink.setAttribute("class", "aside-link")
    social_linksLink.setAttribute("class", "aside-link  aside-active")
})


// --------------------------
// about aside links
// ---------------------------
const profile = document.getElementById("profile")
const skills = document.getElementById("skills")
const education = document.getElementById("education")
const bucket_list = document.getElementById("bucket-list")

const profileLink = document.getElementById("profile-link")
const skillsLink = document.getElementById("skills-link")
const educationLink = document.getElementById("education-link")
const bucket_listLink = document.getElementById("bucket-list-link")


profileLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#profile`;

    show(profile, "block")
    hide(skills)
    hide(education)
    hide(bucket_list)

    profileLink.setAttribute("class", "aside-link aside-active")
    skillsLink.setAttribute("class", "aside-link")
    educationLink.setAttribute("class", "aside-link")
    bucket_listLink.setAttribute("class", "aside-link")
})


skillsLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#skills`;

    hide(profile)
    show(skills, "block")
    hide(education)
    hide(bucket_list)

    profileLink.setAttribute("class", "aside-link")
    skillsLink.setAttribute("class", "aside-link aside-active")
    educationLink.setAttribute("class", "aside-link")
    bucket_listLink.setAttribute("class", "aside-link")
})


educationLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#education`;

    hide(profile)
    hide(skills)
    hide(education, "block")
    hide(bucket_list)

    profileLink.setAttribute("class", "aside-link")
    skillsLink.setAttribute("class", "aside-link")
    educationLink.setAttribute("class", "aside-link aside-active")
    bucket_listLink.setAttribute("class", "aside-link")
})


bucket_listLink.addEventListener("click", e => {
    e.preventDefault()
    document.location.href = `${document.location.pathname}#bucket-list`;

    hide(profile)
    hide(skills)
    hide(education)
    show(bucket_list, "block")

    profileLink.setAttribute("class", "aside-link")
    skillsLink.setAttribute("class", "aside-link")
    educationLink.setAttribute("class", "aside-link")
    bucket_listLink.setAttribute("class", "aside-link aside-active")
})
