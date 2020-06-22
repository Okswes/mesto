export const editBtn = document.querySelector('.edit-button');
export const addBtn = document.querySelector('.add-button');
export const form = document.querySelector('.popup_type_info');
export const addForm = document.querySelector('.popup_type_add');
export const pictureForm = document.querySelector('.popup_type_picture');
export const nameInput = document.querySelector('.popup__item_el_name');
export const jobInput = document.querySelector('.popup__item_el_prof');
export const placeInput = document.querySelector('.popup__item_el_place');
export const linkInput = document.querySelector('.popup__item_el_link');
export const profTitle = document.querySelector('.profile__title');
export const profSubt = document.querySelector('.profile__subtitle');
export const cardsField = document.querySelector('.place-list');
export const placeErrorField = addForm.querySelector('#place-input-error');
export const urlErrorField = addForm.querySelector('#url-input-error');

export const formConfig = {
    formElement: '.popup__container',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_active'
};

export const initialCards = [
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