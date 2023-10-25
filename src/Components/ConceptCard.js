const client_styles = ['concept','flex','items-center','justify-between','px-2.5','w-auto','h-24','border','border-white','rounded-lg','mb-2.5']


export const ConceptCard = (id, name, coins, type)=> {
    const client = document.createElement("div");
    client.classList.add(...client_styles);
    client.id = id;
    client.append(clientInfo(name),campCoinsInfo(coins,type),clientActions());
    return client
}

const clientInfo = (name) => {
    const info = document.createElement("div");
    info.classList.add("client-info","flex","items-center");
    const divName = document.createElement("div")
    divName.classList.add("name")
    divName.textContent = name
    info.append(divName)
    return info
}

const campCoinsInfo = (coins, type) => {
    const info = document.createElement("div");
    info.classList.add("client-coins","flex","items-center");
    const divName = document.createElement("div")
    divName.classList.add("name")
    if (type==='sum'){
        divName.textContent = `+${coins}`
    }else{
        divName.textContent = `-${coins}`
    }
    info.append(divName)
    return info
}

const clientActions = () => {
    const actions = document.createElement("div")
    actions.classList.add("actions","flex","justify-between","text-2xl")

    const editButton = action("edit-client",["fa-solid","fa-pen-to-square"])

    editButton.addEventListener("click",()=>{
        document.getElementById("editCamper").classList.toggle("hidden");
        document.getElementById("editCamper").classList.toggle("active");
    })

    const delButton = action("del-client",["fa-solid","fa-trash"])
    actions.append(editButton, delButton)
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