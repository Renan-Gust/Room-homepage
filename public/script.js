function openMenu() {
    const openMenu = document.querySelector("header #open-menu")
    openMenu.style.display = "block"
    openMenu.style.opacity = "1"

    const removePaddingHeader = document.querySelector("#images-container header")
    removePaddingHeader.style.padding = "0"

    const imgAppearToCloseMenu = document.querySelector("header #open-menu .menu img")
    imgAppearToCloseMenu.style.display = "block"
    imgAppearToCloseMenu.style.opacity = "1"

    const removeH1Header = document.querySelector("header h1")
    removeH1Header.style.display = "none"
    removeH1Header.style.opacity = "0"

    const removeImgHeader = document.querySelector("header img")
    removeImgHeader.style.display = "none"
    removeImgHeader.style.opacity = "0"

    const removeMarginHeader = document.querySelector("#images-container header")
    removeMarginHeader.style.margin = "0"

    const presentation = document.querySelector("#teste #presentation")
    presentation.style.width = 87 + "%"

    const preview = document.querySelector("#images-container #preview")
    preview.style.top = 291 + "px"
}

function closeMenu() {
    const closeMenu = document.querySelector("header #open-menu")
    closeMenu.style.display = "none"
    closeMenu.style.opacity = "0"

    const addPaddingHeader = document.querySelector("#images-container header")
    addPaddingHeader.style.paddingTop = 40 + "px" 
    addPaddingHeader.style.paddingLeft = 14 + "px" 

    const imgVanishToCloseMenu = document.querySelector("header #open-menu .menu img")
    imgVanishToCloseMenu.style.display = "none"
    imgVanishToCloseMenu.style.opacity = "0"

    const addH1Header = document.querySelector("header h1")
    addH1Header.style.display = "block"
    addH1Header.style.opacity = "1"

    const addImgHeader = document.querySelector("header img")
    addImgHeader.style.display = "block"
    addImgHeader.style.opacity = "1"

    const addMarginHeader = document.querySelector("#images-container header")
    addMarginHeader.style.marginLeft = 30 + "px"

    const preview = document.querySelector("#images-container #preview")
    preview.style.top = 222 + "px"
    
}

//Change image
const imageContainer = document.querySelector("#images-container")
var index = 0

//Change text
const discover = document.querySelector("#presentation .discover")
const available = document.querySelector("#presentation .available")
const manufactured = document.querySelector("#presentation .manufactured")

function next() {
    index++   

    if(index == -1){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-3.jpg')"
        
        manufactured.style.display = "block"
        available.style.display = "none"
        discover.style.display = "none"
    }

    if(index == 0){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-1.jpg')"

        manufactured.style.display = "none"
        available.style.display = "none"
        discover.style.display = "block"
    }

    if(index == 1){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-2.jpg')"

        available.style.display = "block"
        discover.style.display = "none"
        manufactured.style.display = "none"
    }

    if(index == 2){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-3.jpg')"

        available.style.display = "none"
        discover.style.display = "none"
        manufactured.style.display = "block"
    }

    if(index == 3){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-1.jpg')"
        index = 0

        manufactured.style.display = "none"
        available.style.display = "none"
        discover.style.display = "block"
    }
}

function previous() {
    index-- 

    if(index == 0){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-1.jpg')"

        manufactured.style.display = "none"
        available.style.display = "none"
        discover.style.display = "block"
    }

    if(index == 1){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-2.jpg')"
        
        manufactured.style.display = "none"
        available.style.display = "block"
        discover.style.display = "none"
    }

    if(index == -1){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-3.jpg')"

        discover.style.display = "none"
        available.style.display = "none"
        manufactured.style.display = "block"
    }

    if(index == -2){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-2.jpg')"

        available.style.display = "block"
        manufactured.style.display = "none"
        discover.style.display = "none"
    }

    if(index == -3){
        imageContainer.style.backgroundImage = "url('/public/images/desktop-image-hero-1.jpg')"
        index = 0

        manufactured.style.display = "none"
        available.style.display = "none"
        discover.style.display = "block"
    }
}
