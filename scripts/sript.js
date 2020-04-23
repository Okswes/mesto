const editBtn = document.querySelector('.edit-button');
const form = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-button');

const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_prof');
const profTitle = document.querySelector('.profile__title');
const profSubt = document.querySelector('.profile__subtitle');

nameInput.value = profTitle.textContent;
jobInput.value = profSubt.textContent;


function edit() {
    form.classList.add ('popup_opened');
}

function close() {
    form.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();      

    profTitle.textContent =  nameInput.value;
    profSubt.textContent =  jobInput.value;

    close();
}


editBtn.addEventListener("click", edit); 
closeBtn.addEventListener("click", close); 
form.addEventListener('submit', formSubmitHandler);