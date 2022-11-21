const mondayPlus = document.querySelector("#monday-plus")
let mondayListContent = ""
mondayPlus.addEventListener("click", () => {
    let i = 0
    i++;
    const mondayUl = document.querySelector("#mondayUl").innerHTML = 
    `
    ${mondayListContent}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${i}" autocomplete="off" style="background-color: #338af3; border: 0;">
    </form>
    
    </li>
    `

    mondayPlus.style.visibility = "hidden"
    const mondayCheck = document.querySelector("#submit")
    mondayCheck.style.visibility = "visible"
    mondayCheck.addEventListener("click", () => {
        const form = document.querySelector("form")

        console.log(form.name.value)  //? como passar o names${i} ?

        //TODO: tentar fazer funcionar assim depois
        mondayListContent += `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: #338af3; border: 0;" value="${form.name.value}">
        </form>
        
        </li>
        ` 
        
        console.log(mondayListContent)


        mondayPlus.style.visibility = "visible"
        document.querySelector("#submit").style.visibility = "hidden"
    })
    
})