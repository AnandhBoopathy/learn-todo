const adding = document.querySelector(".mycadd");
const listing = document.querySelector(".myctodos");
const searching = document.querySelector(".search");
// ADDING TODOS

const generateTodo = ((a) => {
    const html = `
    <li class = "list-group-item d-flex justify-content-between align-items-center">
        <span>${a}</span>
        <i class="far fa-trash-alt mycdelete"></i>
    </li>`;
    listing.innerHTML += html;
});
adding.addEventListener('submit', e => {
    e.preventDefault();
    const todo = adding.add.value.trim();
    if(todo.length){
        generateTodo(todo);
        adding.reset();
    }
});

// DELETING TODOS

listing.addEventListener('click', e => {
    if(e.target.classList.contains('mycdelete')) {
        e.target.parentElement.remove();
    }
});

// SEARCHING
const filterTodos = (a) => {
    Array.from(listing.children)
        .filter((b) => !b.textContent.toLowerCase().includes(a))
        .forEach((b) => b.classList.add('filtered'));
    Array.from(listing.children)
        .filter((b) => b.textContent.toLowerCase().includes(a))
        .forEach((b) => b.classList.remove('filtered'));
};
searching.addEventListener('keyup', () => {
    const term = searching.search.value.trim().toLowerCase();
    filterTodos(term);
});
searching.addEventListener('submit', e => {
    e.preventDefault();
});