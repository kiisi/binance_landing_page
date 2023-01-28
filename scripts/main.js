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




            console.log("open")
            
        }else{
            let footerLinksHeight = footerLinks.clientHeight + 'px'
            pointer.textContent = "add"
            footerLinks.classList.remove("effect")

            console.log("close")
        }
    }
})