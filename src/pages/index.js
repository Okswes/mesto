import '../pages/index.css';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/Card.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
import { editBtn,
    addBtn,
    form,
    addForm,
    pictureForm,
    nameInput,
    jobInput,
    placeInput,
    linkInput,
    profTitle,
    profSubt,
    cardsField,
    placeErrorField,
    urlErrorField,
    formConfig,
    initialCards } from "../scripts/utils/constants.js";



//Попап с данными пользователя
const profileCard = new UserInfo ({name: profTitle, prof: profSubt});
const openFormInfo = new PopupWithForm({formSubmit: (formData) => {
            profileCard.setUserInfo(formData);
            openFormInfo.close();
        }
}, form);
openFormInfo.setEventListeners();


//Функция открытия фото
function openImagePopup(card){
    const fullSizePopup = new PopupWithImage(pictureForm);
    fullSizePopup.setEventListeners();
    fullSizePopup.open(card);
}

//Попап с добавлением карточек
const photoCard = new PopupWithForm({formSubmit: (formData)=>{
    const card = new Card(formData, 'card_template', () => openImagePopup(formData));
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
}}, addForm);
photoCard.setEventListeners();


//Открытие попапа с изменением имени и профессии
function editProfileHandler() {
    const infoUser = profileCard.getUserInfo();
    nameInput.value = infoUser.name;
    jobInput.value = infoUser.prof;
    openFormInfo.open();
}


// Открытие попапа с добавлением карточек
function addPhotoCardHandler() {
    photoCard.open();
    placeInput.value = '';
    linkInput.value = '';
    placeErrorField.textContent = placeInput.validationMessage;
    placeErrorField.classList.toggle('popup__error_active');
    urlErrorField.textContent = linkInput.validationMessage;
    urlErrorField.classList.toggle('popup__error_active');
}


//Добавление начальных карточек
const cardList = new Section({
    items: initialCards, renderer: (item) => {
        const card = new Card(item, 'card_template', () => openImagePopup(item));
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
    }
}, cardsField);
cardList.addItem();


//Валидация
const profileValidator = new FormValidator(formConfig, form);
profileValidator.enableValidation();

const pictureValidator = new FormValidator(formConfig, addForm);
pictureValidator.enableValidation();


editBtn.addEventListener('click', editProfileHandler);
addBtn.addEventListener('click', addPhotoCardHandler);