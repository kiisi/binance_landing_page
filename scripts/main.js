/* Mobile banner cancel */

let mobileBanner = document.querySelector(".mobile-banner")
let mobileBannerCancelBtn = document.querySelector(".mobile-banner__sub--cancel")

mobileBannerCancelBtn.addEventListener("click",()=>{
    mobileBanner.style.display = "none"
})

/* Banner cancel */

let banner = document.querySelector(".banner")
let bannerCancelBtn = document.querySelector(".banner__content--btn__cancel")

bannerCancelBtn.addEventListener("click",()=>{
    banner.style.display = "none"
})

// Persist App Theme

function persistAppTheme(apptheme){
    if(localStorage.getItem('theme')){
        if(localStorage.getItem('theme') === 'dark'){
            darkMode()
        }else{
            lightMode()
        }
    }else{
        const OS_darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if(OS_darkTheme.matches){
            localStorage.setItem('theme', 'dark')
            darkMode()
        }else{
            localStorage.setItem('theme', 'light')
            lightMode()
        }
    }
}

persistAppTheme()

/* Theme Data */

const desktopThemeBtn = document.querySelector(".navigation__sub--settings__theme")

const mobileThemeBtnBox = document.querySelector(".mobile-navigation__settings--item__theme")
const mobileThemeBtn = document.querySelector(".mobile-navigation__settings--item__theme-btn div")


let themeBtnCurrentState = mobileThemeBtnBox.getAttribute('aria-mobile-theme-btn') == 'true' ? true : false

mobileThemeBtnBox.addEventListener("click", ()=>{
    if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'light')
        lightMode()
        mobileThemeBtnBox.setAttribute('aria-mobile-theme-btn', 'false')
        themeBtnCurrentState = false;
        // SVG Light Mode
        mobileThemeBtn.innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="css-41qi6t" width="24"  height="24" ><defs><symbol viewBox="0 0 24 24" id="mode-light"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2H13.5V5H10.5V2ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM5.98948 3.86891L3.86816 5.99023L5.98948 8.11155L8.1108 5.99023L5.98948 3.86891ZM2 13.5V10.5H5V13.5H2ZM3.86794 18.0095L5.98926 20.1309L8.11058 18.0095L5.98926 15.8882L3.86794 18.0095ZM13.5 19V22H10.5V19H13.5ZM18.01 15.8884L15.8887 18.0098L18.01 20.1311L20.1313 18.0098L18.01 15.8884ZM19 10.5H22V13.5H19V10.5ZM15.8894 5.99001L18.0107 8.11133L20.1321 5.99001L18.0107 3.86869L15.8894 5.99001Z" fill="currentColor"></path></symbol></defs><use xlink:href="#mode-light" fill="#707A8A"></use></svg>`
        
    }else{
        localStorage.setItem('theme', 'dark')
        darkMode()
        mobileThemeBtnBox.setAttribute('aria-mobile-theme-btn', 'true')
        themeBtnCurrentState = true;
        // SVG Dark Mode
        mobileThemeBtn.innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="css-1biqlx6" width="24"  height="24" ><defs><symbol viewBox="0 0 24 24" id="mode-dark"><path d="M20.9677 12.7676C19.84 13.5449 18.4732 13.9999 17 13.9999C13.134 13.9999 10 10.8659 10 6.99994C10 5.52678 10.4551 4.15991 11.2323 3.03223C6.62108 3.42175 3 7.28797 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C16.712 20.9999 20.5782 17.3789 20.9677 12.7676Z" fill="currentColor"></path></symbol></defs><use xlink:href="#mode-dark" fill="#707A8A"></use></svg>`
    }
})


/* Dark-Light Theme */

desktopThemeBtn.addEventListener("click", ()=>{
    if(desktopThemeBtn.textContent === "dark_mode"){
        localStorage.setItem('theme', 'dark')
        darkMode()
    }else{
        localStorage.setItem('theme', 'light')
        lightMode()
    }
})

function darkMode(){
    document.querySelector("body").classList.add("dark-mode--theme")
    document.querySelector(".header__main--image img").src = './assets/images/foreground-image-dark.png';
    // desktopThemeBtn
    document.querySelector(".navigation__sub--settings__theme").textContent = "light_mode"
    // mobileThemeBtnBox
    document.querySelector(".mobile-navigation__settings--item__theme").setAttribute('aria-mobile-theme-btn', 'true')
    // mobileThemeBtn
    // SVG Dark Mode
    document.querySelector(".mobile-navigation__settings--item__theme-btn div").innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="css-1biqlx6" width="24"  height="24" ><defs><symbol viewBox="0 0 24 24" id="mode-dark"><path d="M20.9677 12.7676C19.84 13.5449 18.4732 13.9999 17 13.9999C13.134 13.9999 10 10.8659 10 6.99994C10 5.52678 10.4551 4.15991 11.2323 3.03223C6.62108 3.42175 3 7.28797 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C16.712 20.9999 20.5782 17.3789 20.9677 12.7676Z" fill="currentColor"></path></symbol></defs><use xlink:href="#mode-dark" fill="#707A8A"></use></svg>`;
}


function lightMode(){
    
    document.querySelector("body").classList.remove("dark-mode--theme")
    document.querySelector(".header__main--image img").src = './assets/images/foreground-image-light.png'
    // desktopThemeBtn
    document.querySelector(".navigation__sub--settings__theme").textContent = "dark_mode"
    // mobileThemeBtnBox
    document.querySelector(".mobile-navigation__settings--item__theme").setAttribute('aria-mobile-theme-btn', 'false')
    // mobileThemeBtn
    // SVG Light Mode
    document.querySelector(".mobile-navigation__settings--item__theme-btn div").innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="css-41qi6t" width="24"  height="24" ><defs><symbol viewBox="0 0 24 24" id="mode-light"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2H13.5V5H10.5V2ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM5.98948 3.86891L3.86816 5.99023L5.98948 8.11155L8.1108 5.99023L5.98948 3.86891ZM2 13.5V10.5H5V13.5H2ZM3.86794 18.0095L5.98926 20.1309L8.11058 18.0095L5.98926 15.8882L3.86794 18.0095ZM13.5 19V22H10.5V19H13.5ZM18.01 15.8884L15.8887 18.0098L18.01 20.1311L20.1313 18.0098L18.01 15.8884ZM19 10.5H22V13.5H19V10.5ZM15.8894 5.99001L18.0107 8.11133L20.1321 5.99001L18.0107 3.86869L15.8894 5.99001Z" fill="currentColor"></path></symbol></defs><use xlink:href="#mode-light" fill="#707A8A"></use></svg>`;
}


// Rendering Copy write year

let date = new Date()
document.querySelector(".copyright__text span").textContent = date.getFullYear()


/* Menu bar and Mobile Menu Toggle Display */

let hamburgerMenu = document.querySelector(".navigation__sub--menu");
let mobileNavigation = document.querySelector(".mobile-navigation")
let mobileNavigationCancel = document.querySelector(".mobile-navigation__cancel span")
let mobileNavigationBackdrop = document.querySelector(".mobile-navigation-backdrop")


hamburgerMenu.addEventListener("click",()=>{
    mobileNavigation.classList.add("show")
    mobileNavigationBackdrop.classList.add("show")

    document.querySelector("body").style.overflowY = "hidden"
})
mobileNavigationCancel.addEventListener("click",()=>{
    mobileNavigation.classList.remove("show")
    mobileNavigationBackdrop.classList.remove("show")

    document.querySelector("body").style.overflowY = "auto"
})

/* Mobile Navigation Dropback */

mobileNavigationBackdrop.addEventListener('click', ()=>{
    mobileNavigation.classList.remove("show")
    mobileNavigationBackdrop.classList.remove("show")

    document.querySelector("body").style.overflowY = "auto"
})


/* Mobile Navigation Accordion */

const mobileNavigationTitle = document.querySelectorAll(".mobile-navigation__main--item__title")
mobileNavigationTitle.forEach(title =>{
    if(title.nextElementSibling){
        let titleContent = title.nextElementSibling
        let arrow = title.children.item(1)
        title.onclick = () =>{   
            if(!titleContent.classList.contains("effect")){
                titleContent.classList.add("effect")
                titleContent.style.height = 'auto';
                arrow.style.transform = 'rotate(-180deg)';

                let titleContentHeight = titleContent.clientHeight + 'px'
                titleContent.style.height = '0px';
                setTimeout(()=>{
                    titleContent.style.height = titleContentHeight
                },0)
            }else{
                arrow.style.transform = 'rotate(0deg)';
                titleContent.style.height = '0px';
                titleContent.addEventListener("transitionend",()=>{
                    titleContent.classList.remove("effect")
                },{once: true})
            }
        }
    }
})


/* Footer Accordion */

const footerTitle = document.querySelectorAll(".footer__links--title")
footerTitle.forEach(title =>{

    let footerLinks = title.nextElementSibling
    const pointer = title.children.item(0)
    
    title.onclick = () =>{
        if(!footerLinks.classList.contains("effect")){
            pointer.textContent = "remove"
            footerLinks.classList.add("effect")
            footerLinks.style.height = "auto"

            let footerLinksHeight = footerLinks.clientHeight + 'px'
            footerLinks.style.height = '0px'
            setTimeout(()=>{
                footerLinks.style.height = footerLinksHeight
            },0)

            
        }else{
            pointer.textContent = "add"
            footerLinks.style.height = '0px'
            footerLinks.addEventListener("transitionend",()=>{
                footerLinks.classList.remove("effect")
            },{once: true})

        }
    }
})
