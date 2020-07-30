/**
 * MAIN Javascript for application
 * ....
 */

var __ = {
    TotalItem: 0,
    Todos: [],
};

(() => {
    initEventListener();
})();


function initEventListener(){
    let todoChangeEvent = new Event('TodoChangeEvent');
    document.addEventListener('TodoChangeEvent', () => setTotalItem());

    document.getElementById('btnAdd').addEventListener('click', function(e){
        clickAddEvent(e);
        document.dispatchEvent(todoChangeEvent);
    }, false);
    
    document.getElementById('btnDelete').addEventListener('click', function(e){
        clickDeleteEvent(e);
        document.dispatchEvent(todoChangeEvent);
    }, false);

}

function setTotalItem(){
    document.getElementById('totalItem').innerHTML = __.TotalItem.toString();
}

function clickAddEvent(e){
    const listElement = document.querySelector('#contentTodo > div > ul');
    let inputTodo = document.querySelector('#inputTodo');

    const dataId = new Date().getTime();

    if(inputTodo.value === ''){
        alert('input cannot be empty');
        return;
    }

    const htmlElement = `<li class="list-group-item list-group-item-action"><input class="form-check-input mr-1" data-id="${dataId}" type="checkbox"> ${inputTodo.value.trim()}</li>`;

    __.TotalItem++;
    __.Todos.push({id: dataId, todo: inputTodo.value.trim()});

    listElement.innerHTML += htmlElement;
    inputTodo.value = '';
}


function clickDeleteEvent(e){
    let listElem = document.querySelectorAll('input[type=checkbox]:checked');

    listElem.forEach(function (e){
        e.parentElement.remove();
    });

    __.TotalItem--;

    console.log('delete');
}

