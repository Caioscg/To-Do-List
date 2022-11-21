const mondayPlus = document.querySelector("#monday-plus")
let mondayListContent = []
let i = 0

mondayPlus.addEventListener("click", () => {
    i++;
    let j = i;
    const mondayUl = document.querySelector("#mondayUl").innerHTML = 
    `
    ${mondayListContent.join("")}
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

        let input = document.querySelector(`#name${i}`).value

        let id = `name${i}`

        console.log(input)  //? como passar o names${i} ?


        //TODO: tentar fazer funcionar assim depois
        mondayListContent[i] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: #338af3; border: 0;" value="${input}">
        </form>
        
        </li>
        ` 
        
        console.log(mondayListContent)


        mondayPlus.style.visibility = "visible"
        document.querySelector("#submit").style.visibility = "hidden"
    })
    
})