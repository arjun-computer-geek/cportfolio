const workFolder = document.getElementById("work-folder")
const contactFolder = document.getElementById("contact-folder")
const aboutFolder = document.getElementById("about-folder")
const homeFolder = document.getElementById("home-folder")

const aside = document.getElementById("aside")
const headerTitle = document.getElementById("header-title")


const handleClick = (element) => {
    homeFolder.style.display = "none";
    workFolder.style.display = "none";
    contactFolder.style.display = "none";
    aboutFolder.style.display = "none";

    const home = document.getElementById("home")
    const work = document.getElementById("work")
    const contact = document.getElementById("contact")
    const about = document.getElementById("about")

if(element.id == "home") {
        homeFolder.style.display = "block";
        
        aside.style.display = "none"
        aside.setAttribute("class", "home-links")
        headerTitle.innerHTML = home.headerTitle

        element.setAttribute("class", "nav-link nav-active")
        work.setAttribute("class", "nav-link")
        about.setAttribute("class", "nav-link")
        contact.setAttribute("class", "nav-link")
    }
else if(element.id == "work"){
        workFolder.style.display = "flex";

        aside.style.display = "flex"
        aside.setAttribute("class", "work-links")

        headerTitle.innerHTML = work.headerTitle
        
        element.setAttribute("class", "nav-link nav-active")
        home.setAttribute("class", "nav-link")
        about.setAttribute("class", "nav-link")
        contact.setAttribute("class", "nav-link")
        
        {{#if this.work.list}}
          {{#each this.work.list}}
            {{#if (le @index 0)}}
              document.getElementById("{{this.slug}}-link").setAttribute("class", "aside-link aside-active")
            {{/if}}
          {{/each}}
        {{/if}}
    }
else if(element.id == "contact"){
        contactFolder.style.display = "flex";

        aside.style.display = "flex"
        aside.setAttribute("class", "contact-links")

        headerTitle.innerHTML = contact.headerTitle

        element.setAttribute("class", "nav-link nav-active")
        work.setAttribute("class", "nav-link")
        about.setAttribute("class", "nav-link")
        home.setAttribute("class", "nav-link")

        {{#if this.contact.list}}
          {{#each this.contact.list}}
            {{#if (le @index 0)}}
              document.getElementById("{{this.slug}}-link").setAttribute("class", "aside-link aside-active")
            {{/if}}
          {{/each}}
        {{/if}}
    }
else if(element.id == "about"){
        aboutFolder.style.display = "flex";

        aside.style.display = "flex"
        aside.setAttribute("class", "about-links")

        headerTitle.innerHTML = about.headerTitle

        element.setAttribute("class", "nav-link nav-active")
        work.setAttribute("class", "nav-link")
        home.setAttribute("class", "nav-link")
        contact.setAttribute("class", "nav-link")

        {{#if this.about.list}}
          {{#each this.about.list}}
            {{#if (le @index 0)}}
              document.getElementById("{{this.slug}}-link").setAttribute("class", "aside-link aside-active")
            {{/if}}
          {{/each}}
        {{/if}}
    }
}


const handleWork = id => {
    {{#if this.work.list}}
      {{#each this.work.list}}
        document.getElementById("{{this.slug}}").style.display = "none"
        document.getElementById("{{this.slug}}-link").setAttribute("class", "aside-link")
      {{/each}}
    {{/if}}
   
    document.getElementById(id).style.display="block"

    document.getElementById(`${id}-link`).setAttribute("class", "aside-link aside-active")
}

const handleAbout = id => {
   {{#if this.about.list}}
      {{#each this.about.list}}
        document.getElementById("{{this.slug}}").style.display = "none"
        document.getElementById("{{this.slug}}-link").setAttribute("class", "aside-link")
      {{/each}}
    {{/if}}
    document.getElementById(id).style.display="block"
    document.getElementById(`${id}-link`).setAttribute("class", "aside-link aside-active")
}

const handleContact = id => {
    {{#if this.contact.list}}
      {{#each this.contact.list}}
        document.getElementById("{{this.slug}}").style.display = "none"
        document.getElementById("{{this.slug}}-link").setAttribute("class", "aside-link")
      {{/each}}
    {{/if}}
    document.getElementById(id).style.display="block"
    document.getElementById(`${id}-link`).setAttribute("class", "aside-link aside-active")
}