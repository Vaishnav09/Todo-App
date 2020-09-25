


function getupdate() {

    let ti = document.getElementById('title').value;
    let de = document.getElementById('desc').value;
    if (localStorage.getItem('itemsjson') == null) {
        let arr = [];
        arr.push([ti, de])
        localStorage.setItem('itemsjson', JSON.stringify(arr))

    } else {
        stri = localStorage.getItem('itemsjson');
        arr = JSON.parse(stri);
        arr.push([ti, de]);
        localStorage.setItem('itemsjson', JSON.stringify(arr))
    }
    update();

}
function update() {
    if (localStorage.getItem('itemsjson') == null) {
        let arr = [];
        arr.push([ti, de])
        localStorage.setItem('itemsjson', JSON.stringify(arr))

    } else {
        stri = localStorage.getItem('itemsjson');
        arr = JSON.parse(stri);
    }
    let tbody = document.getElementById('tbody');
    let str = "";
    arr.forEach((e, index) => {
        str += `
        <tr>
                <th scope="row">${index + 1}</th>
                <td>${e[0]}</td>
                <td>${e[1]}</td>
                <td><button id="add1" onclick="del(${index})">Delete</button></td>
        </tr>
        `
    });
    tbody.innerHTML = str;

}

update();
let add = document.getElementById('add');
add.addEventListener("click", getupdate)

function del(index) {
    stri = localStorage.getItem('itemsjson');
    arry = JSON.parse(stri);
    arry.splice(index,1);
    localStorage.setItem('itemsjson', JSON.stringify(arry))
    update();
}