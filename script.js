let addbtn = document.getElementById("addbtn")
let delbtn = document.getElementById("delbtn")
let lists = document.getElementById("lists")

addbtn.addEventListener("click", () => {
    let inputbox = document.getElementById("inputbox")
    let newli = document.createElement("li")
    lists.append(newli)
    newli.innerHTML = inputbox.value + '  <button onclick="delfunc(event)" id="delbtn">Delete</button>'
    inputbox.value = ""
})

const delfunc = (event) => {
    event.target.parentElement.remove()
}