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


//^  ████████████████████████████████████  MAIN PROGRAM

addEntry.addEventListener('submit', e => {

if (e.length) {
console.log("🚀 ~ addEntry.length:", addEntry.length);

console.log('kk');

}

    e.preventDefault();
    const todo = addEntry.add.value.trim();
    makeTemplate(todo);
});
