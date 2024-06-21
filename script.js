let tbody = document.querySelector('tbody')
let modal = document.querySelector('dialog')
let form = document.forms[0]
let ModalForm = document.forms[1]
let btn = document.querySelector('dialog button')

let ob = {}

for (let i = 0; i < 4; i++) {
    inpValue()
}

form.onsubmit = (e) => {
    e.preventDefault()
    let inp = new FormData(form)
    inp.forEach((item, key) => {
        ob[key] = item
    })
    inpValue()
}

function inpValue() {
    let tr = document.createElement('tr')
    let id = document.createElement('td')
    let name = document.createElement('td')
    let year = document.createElement('td')
    let del = document.createElement('img')
    let des = document.createElement('img')
    
    id.setAttribute('name', 'id')
    name.setAttribute('name', 'name')
    year.setAttribute('name', 'year')
    des.setAttribute('src', './images/description.png')
    del.setAttribute('src', './images/delete.png')
    del.classList.add('block')
    des.classList.add('block')
    name.innerHTML = ob.name
    year.innerHTML = ob.year
    
    tbody.append(tr)
    tr.append(id, name, year, des, del)

    del.onclick = () => {
        tr.remove();
    };
    des.onclick = () => {
        modal.show()
    }

    ModalForm.onsubmit = (e) => {
        e.preventDefault()
        let mo = {}

        let modalInp = new FormData(ModalForm)

        modalInp.forEach((elem, key) => {
            mo[key] = elem
            name.innerHTML = mo.name
            year.innerHTML = mo.year
        })
    }

    btn.onclick = () => {
        modal.close()
    }

}
