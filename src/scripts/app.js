import { ControllerCampers } from "./ControllerCampers.js";
import Camper from "./Camper.js";
import Concept from "./Concept.js";
import { CamperCard } from "../Components/CamperCard.js";
import { ConceptCard } from "../Components/ConceptCard.js";
import { ControllerConcepts } from "./ControllerConcepts.js";

const campers = new ControllerCampers();
const concepts = new ControllerConcepts();
window.addEventListener("load",() => {
/*     changeView()
    document.getElementById(localStorage.getItem("active")).classList.toggle("hidden"); */
    let dataSaved = localStorage.getItem("campers")
    let dataConcept = localStorage.getItem("concepts")
    if (dataSaved) campers.campers = JSON.parse(dataSaved)
    if (dataConcept) concepts.concepts = JSON.parse(dataConcept)
    updateData()
})


const sidebar = document.querySelector("nav");

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close"){
    sidebar.classList.toggle("close");
}

document.getElementById("menu").addEventListener("click",()=>{
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})

// Inputs Campers
const camperId = document.getElementById('camperID');
const camperName = document.getElementById('camperName');
const camperPhone = document.getElementById('camperPhone');
const camperEmail = document.getElementById('camperEmail');
const camperCampusGroup = document.getElementById('camperGroup');
//----------------------------------------------------------------

// Inputs Concepts
const descriptionConcept = document.getElementById('descriptionConcept');
const coinsConcept = document.getElementById('coinsConcept');
const typeConcept = document.getElementById('typeConcept');
//----------------------------------------------------------------

// Botones
document.getElementById("_home").addEventListener("click",()=>{
    changeView()
    document.getElementById("home_content").classList.toggle("hidden");
    document.getElementById("home_content").classList.toggle("active");
    saveView();
});

document.getElementById("_campers").addEventListener("click",()=>{
    changeView()
    document.getElementById("campers_content").classList.toggle("hidden");
    document.getElementById("campers_content").classList.toggle("active");
    saveView();
})
document.getElementById("_concepts").addEventListener("click",()=>{
    changeView()
    document.getElementById("concepts_content").classList.toggle("hidden");
    document.getElementById("concepts_content").classList.toggle("active");
    saveView();
})
document.getElementById("btnAddCamper").addEventListener("click",()=>{
    document.getElementById("addCamper").classList.toggle("hidden");
    document.getElementById("addCamper").classList.toggle("active");
})
document.getElementById("btnAddConcept").addEventListener("click",()=>{
    document.getElementById("addConcept").classList.toggle("hidden");
    document.getElementById("addConcept").classList.toggle("active");
})

document.querySelectorAll("#close").forEach(item => {
    item.addEventListener("click",(e)=>{
        const modal = e.target.parentElement.parentElement
        if(modal.classList.contains("modal")){
            modal.classList.toggle("hidden");
        }else{
            modal.parentElement.classList.toggle("hidden");
        }
    })
})
//-----------------------------------------------------------------

// funciones
const saveView = () => {
    const activeView = document.querySelector(".active")
    localStorage.setItem("active",activeView.id)
}

const saveData = () => {
    localStorage.setItem("campers",JSON.stringify(campers.campers))
    localStorage.setItem("concepts",JSON.stringify(concepts.concepts))
}

export const updateData = () => {
    cleanCampersList()
    cleanConceptsList()
    document.getElementById("total_campers").innerHTML = campers.totalCamper()
    document.getElementById("total_coins").innerHTML = campers.totalCampCoins()
    document.getElementById("total_concepts").innerHTML = concepts.getTotalConcepts()
    campers.campers.forEach((camper) =>{
        document.getElementById("campersTable").append(CamperCard(camper._id, null, camper._fullname, camper._campusGroup, camper._campCoins));
    })
    concepts.concepts.forEach((concept) =>{
        document.getElementById("conceptsTable").append(ConceptCard(concept._id, concept._description, concept._coins, concept._type));
    })
}

export const cleanCampersList = () => {
    document.querySelectorAll(".camper").forEach(element => {
        element.remove()
    })
}

const cleanConceptsList = () => {
    document.querySelectorAll(".concept").forEach(element => {
        element.remove()
    })
}

const cleanInputs = () => {
    document.querySelectorAll(".input").forEach((item) => {
        item.value = ""
    });
}

const changeView = () => {
    const divActive = document.querySelector(".active");
    if(divActive){
        divActive.classList.toggle("active");
    divActive.classList.toggle("hidden");
    }
}
//-----------------------------------------------------------------

document.getElementById("newCamper").addEventListener("click",()=>{
    cleanCampersList()
    const camper = new Camper(camperId.value, camperName.value, camperPhone.value, camperEmail.value, camperCampusGroup.value,0);
    campers.addCamper(camper);
    updateData()
    saveData()
    document.getElementById("addCamper").classList.toggle("hidden");
    cleanInputs()
})

document.getElementById("newConcept").addEventListener("click",()=>{
    cleanConceptsList()
    const concept = new Concept( concepts.getTotalConcepts() + 1, descriptionConcept.value, coinsConcept.value, typeConcept.value)
    concepts.addConcept(concept);
    updateData()
    saveData()
    document.getElementById("addConcept").classList.toggle("hidden");
    cleanInputs()
})

document.getElementById("plusCoins").addEventListener("click",()=>{
    const coins = parseInt(document.getElementById("addSelect").value)
    campers.addCampCoin(localStorage.getItem("camperPlus"),coins)
    cleanCampersList()
    updateData()
    saveData()
    document.getElementById("addCoins").classList.toggle("hidden");
})

document.getElementById("minusCoins").addEventListener("click",()=>{
    const coins = parseInt(document.getElementById("resSelect").value)
    campers.resCampCoin(localStorage.getItem("camperPlus"),coins)
    cleanCampersList()
    updateData()
    saveData()
    document.getElementById("resCoins").classList.toggle("hidden");
})

