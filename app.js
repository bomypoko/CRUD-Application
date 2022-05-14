let fname = document.querySelector('#fname')
let lname = document.querySelector('#lname')

data = [
    {firstname: "John" , lastname: "Wick"},
    {firstname: "Spider", lastname: "Man"},
    {firstname: "Doctor", lastname: "Strange"},
    {firstname: "Tommy", lastname: "Jerry"},
]


let panel = document.querySelector('#panel')


function clearForm() {
    document.querySelector('#fname').value = "";
    document.querySelector('#lname').value = "";
}

function renderItem() {
    panel.textContent = "";
    data.forEach(val =>{
        el = document.createElement('option')
        el.textContent = ` ${val.firstname} , ${val.lastname}`
        panel.append(el)
        
    })
}


function panelClick() {
    i = panel.selectedIndex
    document.querySelector('#fname').value = data[i].firstname
    document.querySelector('#lname').value = data[i].lastname
}


function create() {
    fn = document.querySelector('#fname').value
    ln = document.querySelector('#lname').value
    data = [...data, {firstname: fn, lastname: ln}]
    renderItem()
    clearForm()
}


function updateItem() {
    data[i].firstname = document.querySelector('#fname').value
    data[i].lastname = document.querySelector('#lname').value
    renderItem()
}


function deleteItem() {
    data.splice(i, 1)
    clearForm()
    renderItem()
}


renderItem()