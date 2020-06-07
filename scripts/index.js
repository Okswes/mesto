import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const editBtn = document.querySelector('.edit-button');
const addBtn = document.querySelector('.add-button');
const form = document.querySelector('.popup');
const addForm = document.querySelector('.popup_type_add');
export const pictureForm = document.querySelector('.popup_type_picture');
const closeProfileButton = document.querySelector('#close-button-profile');
const closeAddFormButton = document.querySelector('#close-button-addform');
const closePictureButton = document.querySelector('#close-button-picture');

const nameInput = document.querySelector('.popup__item_el_name');
const jobInput = document.querySelector('.popup__item_el_prof');
const placeInput = document.querySelector('.popup__item_el_place');
const linkInput = document.querySelector('.popup__item_el_link');
const profTitle = document.querySelector('.profile__title');
const profSubt = document.querySelector('.profile__subtitle');
export const popupImg = document.querySelector('.popup__full-picture');
export const popupTitle = document.querySelector('.popup__picture-title');

const cardsField = document.querySelector('.place-list');
const submitButton = form.querySelector('.popup__button');
const placeErrorField = addForm.querySelector('#place-input-error');
const urlErrorField = addForm.querySelector('#url-input-error');

const formConfig = {
    formElement: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_active'
};

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

function escCloseHandler (evt) {
    if (evt.key === 'Escape') {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
      document.removeEventListener('keydown', escCloseHandler);
    }
}

export function popupOpenHandler(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', escCloseHandler);
}

function editProfileHandler() {
    popupOpenHandler(form);
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('popup__button_inactive');
    nameInput.value = profTitle.textContent;
    jobInput.value = profSubt.textContent;
}

function addPhotoCardHandler() {
    popupOpenHandler(addForm);
    placeInput.value = '';
    linkInput.value = '';
    placeErrorField.textContent = placeInput.validationMessage;
    placeErrorField.classList.toggle('popup__error_active');
    urlErrorField.textContent = linkInput.validationMessage;
    urlErrorField.classList.toggle('popup__error_active');
}


function renderCard(name, link) {
    const item = {};
    item.name = name;
    item.link = link;
    const card = new Card(item);
    document.querySelector('.place-list').prepend(card.generateCard());
}


function resetErrors(inputs, popup) {
    inputs.forEach(elem => {
        const errorClass = document.querySelector(`#${elem.id}-error`);
        elem.classList.remove('popup__item_type_error');
        errorClass.classList.remove('popup__error_active');
        errorClass.textContent = '';
    });
    const submitButton = popup.querySelector('.popup__button');
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('popup__button_inactive');
}


function togglePopup(popup) {
    if (!popup.classList.contains('popup_type_picture'))
    {
        const inputs = Array.from(popup.querySelectorAll('.popup__item'));
        resetErrors(inputs, popup);
    }
    popup.classList.toggle('popup_opened');
    if (!popup.classList.contains('popup_opened')){
        document.removeEventListener('keydown', escCloseHandler);
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profTitle.textContent = nameInput.value;
    profSubt.textContent = jobInput.value;
    togglePopup(form);
}

function addFormSubmitHandler(evt) {
    evt.preventDefault();
    renderCard(placeInput.value, linkInput.value);
    togglePopup(addForm);
}


function closeOnClickHandler(evt) {
    if (evt.target.classList.contains('popup')) {
        evt.target.classList.remove('popup_opened');
        document.removeEventListener('keydown', escCloseHandler);
    }
}


initialCards.forEach((item) => {
    const card = new Card(item);
    const cardElement = card.generateCard();
    cardsField.prepend(cardElement);
});

const profileValidator = new FormValidator(formConfig, form); 
profileValidator.enableValidation();

const pictureValidator = new FormValidator(formConfig, addForm); 
pictureValidator.enableValidation();



closeProfileButton.addEventListener('click', () => togglePopup(form));
closeAddFormButton.addEventListener('click', () => togglePopup(addForm));
closePictureButton.addEventListener('click', () => togglePopup(pictureForm));
editBtn.addEventListener('click', editProfileHandler);
addBtn.addEventListener('click', addPhotoCardHandler);
form.addEventListener('submit', formSubmitHandler);
addForm.addEventListener('submit', addFormSubmitHandler);
form.addEventListener('click', closeOnClickHandler);
addForm.addEventListener('click', closeOnClickHandler);
pictureForm.addEventListener('click', closeOnClickHandler);