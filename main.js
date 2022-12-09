//TODO: fazer funcionar com o ENTER e melhorar a responsividade
const mondayPlus = document.querySelector("#monday-plus")
let mondayListContent = []
let m = 0

const tuesdayPlus = document.querySelector("#tuesday-plus")
let tuesdayListContent = []
let t = 0

const wednesdayPlus = document.querySelector("#wednesday-plus")
let wednesdayListContent = []
let w = 0

const thursdayPlus = document.querySelector("#thursday-plus")
let thursdayListContent = []
let q = 0

const fridayPlus = document.querySelector("#friday-plus")
let fridayListContent = []
let f = 0

const saturdayPlus = document.querySelector("#saturday-plus")
let saturdayListContent = []
let s = 0

const sundayPlus = document.querySelector("#sunday-plus")
let sundayListContent = []
let d = 0

mondayPlus.addEventListener("click", () => {
    m++;
    document.querySelector("#mondayUl").innerHTML = 
    `
    ${mondayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${m}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    mondayPlus.style.visibility = "hidden"
    const mondayCheck = document.querySelector("#submitM")
    mondayCheck.style.visibility = "visible"
    mondayCheck.addEventListener("click", () => {
        

        let inputM = document.querySelector(`#name${m}`).value

        mondayListContent[m] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputM}">
        </form>
        
        </li>
        ` 

        mondayPlus.style.visibility = "visible"
        document.querySelector("#submitM").style.visibility = "hidden"
    })
    
})

tuesdayPlus.addEventListener("click", () => {
    t++;
    document.querySelector("#tuesdayUl").innerHTML = 
    `
    ${tuesdayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${t}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    tuesdayPlus.style.visibility = "hidden"
    const tuesdayCheck = document.querySelector("#submitT")
    tuesdayCheck.style.visibility = "visible"
    tuesdayCheck.addEventListener("click", () => {

        let inputT = document.querySelector(`#name${t}`).value

        tuesdayListContent[t] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputT}">
        </form>
        
        </li>
        ` 
        tuesdayPlus.style.visibility = "visible"
        document.querySelector("#submitT").style.visibility = "hidden"
    })
    
})

wednesdayPlus.addEventListener("click", () => {
    w++;
    document.querySelector("#wednesdayUl").innerHTML = 
    `
    ${wednesdayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${w}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    wednesdayPlus.style.visibility = "hidden"
    const wednesdayCheck = document.querySelector("#submitW")
    wednesdayCheck.style.visibility = "visible"
    wednesdayCheck.addEventListener("click", () => {

        let inputW = document.querySelector(`#name${w}`).value

        wednesdayListContent[w] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputW}">
        </form>
        
        </li>
        ` 

        wednesdayPlus.style.visibility = "visible"
        document.querySelector("#submitW").style.visibility = "hidden"
    })
    
})

thursdayPlus.addEventListener("click", () => {
    q++;
    document.querySelector("#thursdayUl").innerHTML = 
    `
    ${thursdayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${q}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    thursdayPlus.style.visibility = "hidden"
    const thursdayCheck = document.querySelector("#submitQ")
    thursdayCheck.style.visibility = "visible"
    thursdayCheck.addEventListener("click", () => {

        let inputQ = document.querySelector(`#name${q}`).value

        thursdayListContent[q] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputQ}">
        </form>
        
        </li>
        ` 
        
        console.log(mondayListContent)


        thursdayPlus.style.visibility = "visible"
        document.querySelector("#submitQ").style.visibility = "hidden"
    })
    
})

fridayPlus.addEventListener("click", () => {
    f++;
    document.querySelector("#fridayUl").innerHTML = 
    `
    ${fridayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${f}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    fridayPlus.style.visibility = "hidden"
    const fridayCheck = document.querySelector("#submitF")
    fridayCheck.style.visibility = "visible"
    fridayCheck.addEventListener("click", () => {

        let inputF = document.querySelector(`#name${f}`).value

        fridayListContent[f] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputF}">
        </form>
        
        </li>
        ` 


        fridayPlus.style.visibility = "visible"
        document.querySelector("#submitF").style.visibility = "hidden"
    })
    
})

saturdayPlus.addEventListener("click", () => {
    s++;
    document.querySelector("#saturdayUl").innerHTML = 
    `
    ${saturdayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${s}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    saturdayPlus.style.visibility = "hidden"
    const saturdayCheck = document.querySelector("#submitS")
    saturdayCheck.style.visibility = "visible"
    saturdayCheck.addEventListener("click", () => {

        let inputS = document.querySelector(`#name${s}`).value

        saturdayListContent[s] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputS}">
        </form>
        
        </li>
        ` 

        saturdayPlus.style.visibility = "visible"
        document.querySelector("#submitS").style.visibility = "hidden"
    })
    
})

sundayPlus.addEventListener("click", () => {
    d++;
    document.querySelector("#sundayUl").innerHTML = 
    `
    ${sundayListContent.join("")}
    <li>

    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name${d}" autocomplete="off" style="background-color: transparent; border: 0;">
    </form>
    
    </li>
    `

    sundayPlus.style.visibility = "hidden"
    const sundayCheck = document.querySelector("#submitD")
    sundayCheck.style.visibility = "visible"
    sundayCheck.addEventListener("click", () => {

        let inputD = document.querySelector(`#name${d}`).value

        sundayListContent[d] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Digite sua atividade" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputD}">
        </form>
        
        </li>
        ` 
        
        console.log(mondayListContent)


        sundayPlus.style.visibility = "visible"
        document.querySelector("#submitD").style.visibility = "hidden"
    })
    
})