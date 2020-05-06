const editBtn = document.querySelector('.edit-button');
const addBtn = document.querySelector('.add-button');
const form = document.querySelector('.popup');
const addForm = document.querySelector('.popup_type_add');
const pictureForm = document.querySelector('.popup_type_picture');
const closeBtn = document.querySelectorAll('.close-button');

const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_prof');
const placeInput = document.querySelector('.popup__item_el_place');
const linkInput = document.querySelector('.popup__item_el_link');
const profTitle = document.querySelector('.profile__title');
const profSubt = document.querySelector('.profile__subtitle');
const popupImg = document.querySelector('.popup__full-picture');
const popupTitle = document.querySelector('.popup__picture-title');


const cardsField = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card_template').content;

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function cardsListeners(item){
    item.querySelector('.elements__like').addEventListener("click", likedHandler);
    item.querySelector('.elements__delete').addEventListener("click", deleteHandler);
    item.querySelector('.elements__picture').addEventListener("click", fullsizeHandler);
}


function initialCardsRender(){
    initialCards.forEach(function(item){
        const card = cardTemplate.cloneNode(true);
        card.querySelector('.elements__picture').src = item.link;
        card.querySelector('.elements__text').textContent = item.name;
        card.querySelector('.elements__picture').alt = item.name;
        cardsListeners(card);
        cardsField.append(card);        
    })
}


function editHandler() {
    form.classList.add ('popup_opened');
    nameInput.value = profTitle.textContent;
    jobInput.value = profSubt.textContent;
}

function addHandler(){
    placeInput.value= "";
    linkInput.value = "";
    addForm.classList.add ('popup_opened');
}

function likedHandler(evt){
    evt.target.classList.toggle('elements__like_active');
}

function deleteHandler(evt){
    evt.target.parentElement.remove();
}

function fullsizeHandler(evt){
    pictureForm.classList.add('popup_opened');
    popupImg.src = evt.target.src;
    popupTitle.textContent = evt.target.closest('.elements__item').querySelector('.elements__text').textContent; 
}

function closeHandler() {
    form.classList.remove('popup_opened');
    addForm.classList.remove('popup_opened');
    pictureForm.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profTitle.textContent =  nameInput.value;
    profSubt.textContent =  jobInput.value;
    closeHandler();
}

function addformSubmitHandler(evt){
    evt.preventDefault();
    if (linkInput.value === "" && placeInput.value === "")
    {
        closeHandler();
    }
    else{
        const card = cardTemplate.cloneNode(true);
        card.querySelector('.elements__picture').src = linkInput.value;
        card.querySelector('.elements__text').textContent = placeInput.value;
        card.querySelector('.elements__picture').alt = placeInput.value;
        cardsListeners(card);
        cardsField.prepend(card);
        closeHandler();
    }
}



function closeButtonsCall(){
    closeBtn.forEach(function(buttons){
         buttons.addEventListener("click", closeHandler);
    })
} 


closeButtonsCall();
initialCardsRender();
editBtn.addEventListener("click", editHandler);
addBtn.addEventListener("click", addHandler);
form.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', addformSubmitHandler);