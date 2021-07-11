const siteData = {
    home: {
        title: "Welcome",
        links: false,
    },
    work: {
        title: "Work",
        links: [
            {
                hyperlink:"xydus-game",
                hypertext: "Xydus Game"
            },
            {
                hyperlink:"xydus-music",
                hypertext: "Xydus Music"
            },
            {
                hyperlink:"poar-algo",
                hypertext: "Poar Algo"
            }
        ]
    },
    contact: {
        title: "Contact",
        links: [
            {
                hyperlink:"write-here",
                hypertext:"Write Here"               
            },
            {
                hyperlink:"email-list",
                hypertext:"Email List"               
            },
            {
                hyperlink:"social-links",
                hypertext:"Social Links"               
            }
        ]
    },
    about: {
        title: "About",
        links: [
            {
                hyperlink:"profile",
                hypertext:"Profile"
            },
            {
                hyperlink:"skills",
                hypertext:"Skills"
            },
            {
                hyperlink:"education",
                hypertext:"Education"
            },
            {
                hyperlink:"bucket-list",
                hypertext:"Bucket List"
            }
        ]
    }
}


Handlebars.registerHelper("eq", function (t1, t2) {
    return t1 === t2
})

const templateElement = document.getElementById("aside-template")
const templateSource = templateElement.innerHTML
const template = Handlebars.compile(templateSource)

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
        homeFolder.style.display = "flex";

        // const compiledHtml = template(siteData.home)
        // aside.innerHTML = compiledHtml
        aside.style.display = "none"
        aside.setAttribute("class", "home-links")
        headerTitle.innerHTML = siteData.home.title

       element.setAttribute("class", "nav-link nav-active")
       work.setAttribute("class", "nav-link")
       about.setAttribute("class", "nav-link")
       contact.setAttribute("class", "nav-link")
       
    }
   else if(element.id == "work"){
        workFolder.style.display = "flex";

        const compiledHtml = template(siteData.work)
        aside.innerHTML = compiledHtml
        aside.style.display = "flex"
        aside.setAttribute("class", "work-links")

        headerTitle.innerHTML = siteData.work.title
        
        element.setAttribute("class", "nav-link nav-active")
        home.setAttribute("class", "nav-link")
        about.setAttribute("class", "nav-link")
        contact.setAttribute("class", "nav-link")

        document.getElementById(`${siteData.work.links[0].hyperlink}-link`).setAttribute("class", "aside-link aside-active")
    }
   else if(element.id == "contact"){
        contactFolder.style.display = "flex";

        const compiledHtml = template(siteData.contact)
        aside.innerHTML = compiledHtml
        aside.style.display = "flex"
        aside.setAttribute("class", "contact-links")

        headerTitle.innerHTML = siteData.contact.title

        element.setAttribute("class", "nav-link nav-active")
        work.setAttribute("class", "nav-link")
        about.setAttribute("class", "nav-link")
        home.setAttribute("class", "nav-link")
    }
   else if(element.id == "about"){
        aboutFolder.style.display = "flex";

        const compiledHtml = template(siteData.about)
        aside.innerHTML = compiledHtml
        aside.style.display = "flex"
        aside.setAttribute("class", "about-links")

        headerTitle.innerHTML = siteData.about.title

        element.setAttribute("class", "nav-link nav-active")
        work.setAttribute("class", "nav-link")
        home.setAttribute("class", "nav-link")
        contact.setAttribute("class", "nav-link")
    }
}


const handleWork = id => {
    siteData.work.links.forEach(link => {
        document.getElementById(link.hyperlink).style.display = "none"
        document.getElementById(`${link.hyperlink}-link`).setAttribute("class", "aside-link")
    })
    document.getElementById(id).style.display="block"

    document.getElementById(`${id}-link`).setAttribute("class", "aside-link aside-active")
}

const handleAbout = id => {
    siteData.about.links.forEach(link => {
        document.getElementById(link.hyperlink).style.display = "none"
        document.getElementById(`${link.hyperlink}-link`).setAttribute("class", "aside-link")
    })
    document.getElementById(id).style.display="block"
    document.getElementById(`${id}-link`).setAttribute("class", "aside-link aside-active")
}

const handleContact = id => {
    siteData.contact.links.forEach(link => {
        document.getElementById(link.hyperlink).style.display = "none"
        document.getElementById(`${link.hyperlink}-link`).setAttribute("class", "aside-link")
    })
    document.getElementById(id).style.display="block"
    document.getElementById(`${id}-link`).setAttribute("class", "aside-link aside-active")
}
