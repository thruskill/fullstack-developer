let addItemBtn = document.querySelector('input[type=submit]')
let todoList = document.querySelector('.list-items');
let items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items)

function addItem(e) {
    e.preventDefault();
    let value = document.querySelector('input[type=text]').value;
    document.querySelector('input[type=text]').value = '';
    let data = {
        value,
        done:false
    }
    console.log(data)
    items.push(data);
    rendorList(items, todoList)
    localStorage.setItem('items', JSON.stringify(items))
}

function rendorList(list, displayList) {
    displayList.innerHTML = list.map((e, i) => {
        return `<li>
                    <input class="checkbox" data-index="${i}" id="items${i}"type="checkbox" ${e.done ? 'checked' : ''} id="listItem">
                    <label for="listItem">${e.value}</label>
                </li>`
    }).join('');
}

function toggle (e) {
    if(!e.target.matches('input')) return;
    let ele = e.target
    let index = ele.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items));
    renderList(items, todoList)
}

rendorList(items, todoList)
addItemBtn.addEventListener('click', addItem);

todoList.addEventListener('click',toggle)