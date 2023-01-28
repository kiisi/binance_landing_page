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