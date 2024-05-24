//_ ████████████████████████████████████  SELECTORS

const addEntry = document.querySelector('.add');

const list = document.querySelector('.todos');


//>  ████████████████████████████████████  VARIABLES

const makeTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};


//^ ████████████████████████████████████  MAIN PROGRAM

//_ ████████████████████████████████████  EVENT LISTENERS

//> ████████████████████████████████████  SUBMIT

addEntry.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addEntry.add.value.trim();
    console.log("⨠ addEntry.add.value:", addEntry.add.value.trim());

});
