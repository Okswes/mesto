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


const cardsField = document.querySelector('.place-list');
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


function editHandler() {
    form.classList.toggle('popup_opened');
    document.addEventListener('keydown', closeEsc,  {once: true});
    const submitButton = form.querySelector('.popup__button');
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove('popup__button_inactive');
    nameInput.value = profTitle.textContent;
    jobInput.value = profSubt.textContent;
}

function addHandler() {
    placeInput.value = '';
    linkInput.value = '';
    addForm.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc,  {once: true});
}

function likedHandler(evt) {
    evt.target.classList.toggle('place__like_active');
}

function fullsizeHandler(evt) {
    pictureForm.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc,  {once: true});
    popupImg.src = evt.target.src;
    popupTitle.textContent = evt.target.alt;
}

function deleteHandler(evt) {
    const item = evt.target.closest('.place');
    item.querySelector('.place__like').removeEventListener('click', likedHandler);
    item.querySelector('.place__delete').removeEventListener('click', deleteHandler);
    item.querySelector('.place__picture').removeEventListener('click', fullsizeHandler);
    item.remove();
}

function cardCreator(name, link) {
    const newCard = cardTemplate.cloneNode(true);
    const item = newCard.querySelector('.place__picture');
    item.src = link;
    item.alt = name;
    item.addEventListener('click', fullsizeHandler);
    newCard.querySelector('.place__text').textContent = name;
    newCard.querySelector('.place__like').addEventListener('click', likedHandler);
    newCard.querySelector('.place__delete').addEventListener('click', deleteHandler);
    return newCard;
}

function cardRender(name, link) {
    const card = cardCreator(name, link);
    cardsField.prepend(card);
}


function resetErrors(input, popup) {
    input.forEach(elem => {
        const errorClass = document.querySelector(`#${elem.id}-error`);
        elem.classList.remove('popup__item_type_error');
        errorClass.classList.remove('popup__error_active');
        errorClass.textContent = '';
    });
    const submitButton = popup.querySelector('.popup__button');
    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('popup__button_inactive');
};


function togglePopup(evt) {
    document.addEventListener('keydown', closeEsc);
    const elem = evt.target.closest('.popup');
    if (!elem.classList.contains('popup_type_picture'))
    {
        const inputList = Array.from(elem.querySelectorAll('.popup__item'));
        resetErrors(inputList, elem);
    }
    elem.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profTitle.textContent = nameInput.value;
    profSubt.textContent = jobInput.value;
    togglePopup(evt);
}

function addformSubmitHandler(evt) {
    evt.preventDefault();
    if (linkInput.value === '' && placeInput.value === '') {
        return;
    }
    cardRender(placeInput.value, linkInput.value);
    togglePopup(evt);
}


function closeButtonsCall() {
    closeBtn.forEach(function (buttons) {
        buttons.addEventListener('click', togglePopup);
    })
}

function overlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
        evt.target.classList.remove('popup_opened');
    }
}

function closeEsc (evt) {
    if (evt.key === 'Escape') {
      document.querySelector('.popup_opened').classList.remove('popup_opened');
    };
  }
    

initialCards.forEach((i) => {
    cardRender(i.name, i.link);
})


closeButtonsCall();
editBtn.addEventListener('click', editHandler);
addBtn.addEventListener('click', addHandler);
form.addEventListener('submit', formSubmitHandler);
form.addEventListener('click', overlayClose);
addForm.addEventListener('submit', addformSubmitHandler);
addForm.addEventListener('click', overlayClose);
pictureForm.addEventListener('click', overlayClose);
