let editBtn = document.querySelector('.edit-button');
let form = document.querySelector('.popup');
let closeBtn = document.querySelector('.close-button');



function edit() {
    form.classList.add ('popup_opened');
}

function close() {
    form.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
   
    let nameInput = document.querySelector('.popup__item_el_name');
    let jobInput = document.querySelector('.popup__item_el_prof');
    
    let profTitle = document.querySelector('.profile__title');
    let profSubt = document.querySelector('.profile__subtitle');

    profTitle.textContent =  nameInput.value;
    profSubt.textContent =  jobInput.value;

    form.classList.remove('popup_opened');
}


editBtn.addEventListener("click", edit); 
closeBtn.addEventListener("click", close); 
form.addEventListener('submit', formSubmitHandler);