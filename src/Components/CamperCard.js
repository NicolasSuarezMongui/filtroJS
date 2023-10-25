
import { ControllerCampers } from "../scripts/ControllerCampers.js";
import { ControllerConcepts } from "../scripts/ControllerConcepts.js";
import { updateData,cleanCampersList } from "../scripts/app.js";


const client_styles = ['camper','flex','items-center','justify-between','px-2.5','w-auto','h-24','border','border-white','rounded-lg','mb-2.5']


export const CamperCard = (id, img, name, mail,coins) => {
    if (!img){
        img = "./src/imgs/img_user.png"
    }
    const client = document.createElement("div");
    client.classList.add(...client_styles);
    client.id = id;
    client.append(clientInfo(img,name,mail), camperCoins(coins),clientActions());
    return client
}

const clientInfo = (img, name, mail) => {
    const info = document.createElement("div");
    info.classList.add("client-info","flex","items-center");
    const img_client = document.createElement("img");
    img_client.src = img;
    img_client.classList.add("h-14","w-14","mx-5")
    const divImg = document.createElement("div");
    divImg.classList.add("img-profile")
    divImg.appendChild(img_client);
    const divInfo = document.createElement("div")
    divInfo.classList.add("info")
    const divName = document.createElement("div")
    divName.classList.add("name")
    divName.textContent = name
    const divMail = document.createElement("div")
    divMail.classList.add("mail")
    divMail.textContent = mail
    divInfo.append(divName,divMail)
    info.append(divImg,divInfo)
    return info
}

const clientActions = () => {
    const actions = document.createElement("div")
    actions.classList.add("actions","flex","justify-between","text-2xl")

    const sumButton = action("view-client",["fa-solid","fa-circle-plus"])

    sumButton.addEventListener("click",()=>{
        const concepts = new ControllerConcepts()
        const campers = new ControllerCampers()

        let getConcepts = localStorage.getItem('concepts')
        if (getConcepts) concepts.concepts = JSON.parse(getConcepts)

        let getCampers = localStorage.getItem('campers')
        if (getCampers) campers.campers = JSON.parse(getCampers)

        document.querySelectorAll("#addSelect option").forEach((items) => items.remove())

        concepts.getSumTypes().forEach((item)=>{
            console.log(item._description);
            const option = document.createElement("option")
            option.textContent = item._description
            option.value = item._coins
            document.getElementById("addSelect").append(option)
        })
        localStorage.setItem('camperPlus',actions.parentElement.id)
        document.getElementById("addCoins").classList.toggle("hidden")
    })

    const resButton = action("view-client",["fa-solid","fa-circle-minus"])

    resButton.addEventListener("click",()=>{
        const concepts = new ControllerConcepts()
        const campers = new ControllerCampers()

        let getConcepts = localStorage.getItem('concepts')
        if (getConcepts) concepts.concepts = JSON.parse(getConcepts)

        let getCampers = localStorage.getItem('campers')
        if (getCampers) campers.campers = JSON.parse(getCampers)

        document.querySelectorAll("#resSelect option").forEach((items) => items.remove())

        concepts.getResTypes().forEach((item)=>{
            console.log(item._description);
            const option = document.createElement("option")
            option.textContent = item._description
            option.value = item._coins
            document.getElementById("resSelect").append(option)
        })
        localStorage.setItem('camperPlus',actions.parentElement.id)
        document.getElementById("resCoins").classList.toggle("hidden")
    })

    const editButton = action("edit-client",["fa-solid","fa-pen-to-square"])

    editButton.addEventListener("click",()=>{
        document.getElementById("editCamper").classList.toggle("hidden");
        document.getElementById("editCamper").classList.toggle("active");
    })

    const delButton = action("del-client",["fa-solid","fa-trash"])

    delButton.addEventListener("click",()=>{
        const campers = new ControllerCampers()

        let getCampers = localStorage.getItem('campers')
        if (getCampers) campers.campers = JSON.parse(getCampers)
        const camper = campers.getCamper(actions.parentElement.id)
        if (camper) {
            campers.removeCamper(camper)
            localStorage.setItem("campers",JSON.stringify(campers.campers))
            location.reload();
        } else {
            alert("No se pudo eliminar")
        }
    })
    actions.append(sumButton, resButton, editButton, delButton)
    return actions
}

const actions_style = ["flex", "justify-center","items-center","mx-1.5","hover:bg-red-900","w-12","h-12","rounded-lg","cursor-pointer"]

const action = (text_action,class_icon) =>{
    const divAction = document.createElement("div")
    divAction.classList.add(text_action,...actions_style)
    const icon = document.createElement("i")
    icon.classList.add(...class_icon)
    divAction.appendChild(icon)
    return divAction
}

const camperCoins = (coins)=>{
    const info = document.createElement("div");
    info.classList.add("client-info","flex","items-center");
    const divName = document.createElement("div")
    divName.classList.add("name")
    divName.textContent = `CampCoins: ${coins}`
    info.append(divName)
    return info
}