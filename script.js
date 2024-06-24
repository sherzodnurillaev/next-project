import { arr } from "./db.js";

let form = document.forms[0];
let modal = document.querySelector('dialog');
let ModalForm = document.forms[1];

reloadUsers(arr);

form.onsubmit = (e) => {
    e.preventDefault();

    let obj = {
        id: arr.length + 1
    };

    let formData = new FormData(form);
    formData.forEach((value, key) => {
        obj[key] = value;
    });

    arr.push(obj);
    reloadUsers(arr);
};

function reloadUsers(arr) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    arr.forEach((item, index) => {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let year = document.createElement('td');
        let del = document.createElement('img');
        let des = document.createElement('img');

        id.textContent = index + 1;
        name.textContent = item.name;
        year.textContent = item.year;
        del.src = './images/delete.png';
        des.src = './images/description.png';
        del.classList.add('block');
        des.classList.add('block');

        tr.append(id);
        tr.append(name);
        tr.append(year);
        tr.append(des);
        tr.append(del);

        tbody.append(tr);

        del.onclick = () => {
            arr.splice(index, 1);
            reloadUsers(arr);
        };

        des.onclick = () => {

            ModalForm.name.value = item.name;
            ModalForm.year.value = item.year;
            modal.show();

            ModalForm.onsubmit = (e) => {
                e.preventDefault();

                item.name = ModalForm.name.value;
                item.year = ModalForm.year.value;

                modal.close();
                reloadUsers(arr);
            };
        };
    });
}
