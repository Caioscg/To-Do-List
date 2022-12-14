//TODO: melhorar a responsividade(media queries) e mudar o readme
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

    <form action="" class="form">
        <input type="text" placeholder="Enter your activity" id="nameM${m}" autocomplete="off" style="background-color: transparent; border: 0;">

        <input type="submit" value="✔️" id="submitM" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    mondayPlus.style.visibility = "hidden"
    const mondayCheck = document.querySelector("#submitM")
    mondayCheck.style.visibility = "visible"
    mondayCheck.addEventListener("click", (e) => {
        e.preventDefault()
        if (document.querySelector(`#nameM${m}`).value === "") return

        let inputM = document.querySelector(`#nameM${m}`).value

        mondayListContent[m] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputM}">
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
        <input type="text" placeholder="Enter your activity" id="nameT${t}" autocomplete="off" style="background-color: transparent; border: 0;">

        <input type="submit" value="✔️" id="submitT" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    tuesdayPlus.style.visibility = "hidden"
    const tuesdayCheck = document.querySelector("#submitT")
    tuesdayCheck.style.visibility = "visible"
    tuesdayCheck.addEventListener("click", (e) => {

        e.preventDefault()
        if (document.querySelector(`#nameT${t}`).value === "") return

        let inputT = document.querySelector(`#nameT${t}`).value

        tuesdayListContent[t] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputT}">
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
        <input type="text" placeholder="Enter your activity" id="nameW${w}" autocomplete="off" style="background-color: transparent; border: 0;">
        
        <input type="submit" value="✔️" id="submitW" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    wednesdayPlus.style.visibility = "hidden"
    const wednesdayCheck = document.querySelector("#submitW")
    wednesdayCheck.style.visibility = "visible"
    wednesdayCheck.addEventListener("click", (e) => {

        e.preventDefault()
        if (document.querySelector(`#nameW${w}`).value === "") return

        let inputW = document.querySelector(`#nameW${w}`).value

        wednesdayListContent[w] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputW}">
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
        <input type="text" placeholder="Enter your activity" id="nameQ${q}" autocomplete="off" style="background-color: transparent; border: 0;">
        
        <input type="submit" value="✔️" id="submitQ" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    thursdayPlus.style.visibility = "hidden"
    const thursdayCheck = document.querySelector("#submitQ")
    thursdayCheck.style.visibility = "visible"
    thursdayCheck.addEventListener("click", (e) => {
        
        e.preventDefault()
        if (document.querySelector(`#nameQ${q}`).value === "") return

        let inputQ = document.querySelector(`#nameQ${q}`).value

        thursdayListContent[q] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputQ}">
        </form>
        
        </li>
        ` 

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
        <input type="text" placeholder="Enter your activity" id="nameF${f}" autocomplete="off" style="background-color: transparent; border: 0;">
        
        <input type="submit" value="✔️" id="submitF" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    fridayPlus.style.visibility = "hidden"
    const fridayCheck = document.querySelector("#submitF")
    fridayCheck.style.visibility = "visible"
    fridayCheck.addEventListener("click", (e) => {
        
        e.preventDefault()
        if (document.querySelector(`#nameF${f}`).value === "") return

        let inputF = document.querySelector(`#nameF${f}`).value

        fridayListContent[f] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputF}">
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
        <input type="text" placeholder="Enter your activity" id="nameS${s}" autocomplete="off" style="background-color: transparent; border: 0;">
        
        <input type="submit" value="✔️" id="submitS" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    saturdayPlus.style.visibility = "hidden"
    const saturdayCheck = document.querySelector("#submitS")
    saturdayCheck.style.visibility = "visible"
    saturdayCheck.addEventListener("click", (e) => {
        
        e.preventDefault()
        if (document.querySelector(`#nameS${s}`).value === "") return

        let inputS = document.querySelector(`#nameS${s}`).value

        saturdayListContent[s] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputS}">
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
        <input type="text" placeholder="Enter your activity" id="nameD${d}" autocomplete="off" style="background-color: transparent; border: 0;">

        <input type="submit" value="✔️" id="submitD" style="font-size: 1.2rem;">
    </form>
    
    </li>
    `

    sundayPlus.style.visibility = "hidden"
    const sundayCheck = document.querySelector("#submitD")
    sundayCheck.style.visibility = "visible"
    sundayCheck.addEventListener("click", (e) => {
        
        e.preventDefault()
        if (document.querySelector(`#nameD${d}`).value === "") return

        let inputD = document.querySelector(`#nameD${d}`).value

        sundayListContent[d] = `
        <li>
   
        <form action="">
            <input type="text" placeholder="Enter your activity" autocomplete="off" style="background-color: transparent; border: 0;" value="${inputD}">
        </form>
        
        </li>
        ` 

        sundayPlus.style.visibility = "visible"
        document.querySelector("#submitD").style.visibility = "hidden"
    })
    
})