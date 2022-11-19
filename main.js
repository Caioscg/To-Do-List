const mondayPlus = document.querySelector("#monday-plus")
mondayPlus.addEventListener("click", () => {
    const mondayUl = document.querySelector("#mondayUl").innerHTML = 
    `
    <li>
    <form action="">
        <input type="text" placeholder="Digite sua atividade" id="name" style="background-color: #338af3; border: 0;">
    </form>
    <input type="submit" value="✔️" style="background-color: #338af3; border: 0; cursor: pointer;">
    </li>
    `
    mondayPlus.style.visibility = "hidden"
})