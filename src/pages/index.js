import '../pages/index.css';
import { FormValidator } from '../scripts/components/FormValidator.js';
import { Section } from '../scripts/components/Section.js';
import { Card } from '../scripts/components/Card.js';
import { PopupWithForm } from '../scripts/components/PopupWithForm.js';
import { PopupWithImage } from '../scripts/components/PopupWithImage.js';
import { UserInfo } from '../scripts/components/UserInfo.js';
<<<<<<< HEAD
import { Api } from '../scripts/components/Api.js';
import {
    editBtn,
    addBtn,
    avatarBtn,
    form,
    addForm,
    avatarForm,
    pictureForm,
    deleteForm,
=======
import { editBtn,
    addBtn,
    form,
    addForm,
    pictureForm,
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
    nameInput,
    jobInput,
    placeInput,
    linkInput,
<<<<<<< HEAD
    avatarInput,
    profTitle,
    profSubt,
    profAvatar,
    cardsField,
    placeErrorField,
    urlErrorField,
    avatarErrorField,
    formConfig
} from "../scripts/utils/constants.js";


//Апи
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12',
    headers: {
        authorization: 'db48a2d9-d58c-40f0-82e6-c72b8d0b86f5',
        'Content-Type': 'application/json'
    }
});


//Вывод первоначальных карточек
const cardList = new Section({
    renderer: (item) => {
        const card = new Card(item, () => api.putLike(item._id), () => api.deleteLike(item._id), 'card_template', openImagePopup, (item) => {
            deleteId = item;
            deleteCardForm.open();});
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
    }
}, cardsField);

api.getInitialCards()
    .then((items) => {
        cardList.addItem(items);
    })
    .catch((err) => {
        console.log(err);
    });


//Загрузка данных пользователя
api.getUserInfo()
    .then((item) => {
        profTitle.textContent = item.name;
        profSubt.textContent = item.about;
        profAvatar.src = item.avatar;
    })
    .catch((err) => {
        console.log(err);
    });
=======
    profTitle,
    profSubt,
    cardsField,
    placeErrorField,
    urlErrorField,
    formConfig,
    initialCards } from "../scripts/utils/constants.js";
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5



//Попап с данными пользователя
<<<<<<< HEAD
const profileCard = new UserInfo({ name: profTitle, prof: profSubt });
const openFormInfo = new PopupWithForm({
    formSubmit: (formData) => {
        openFormInfo.setLoadingButton();
        api.changeProfileInfo(formData)
        .then(() => {
            profileCard.setUserInfo(formData);
            openFormInfo.setDefaultButton();
        })
        .catch((err) => {
            openFormInfo.setDefaultButton();
            console.log(err);
        });        
        openFormInfo.close();
    }
=======
const profileCard = new UserInfo ({name: profTitle, prof: profSubt});
const openFormInfo = new PopupWithForm({formSubmit: (formData) => {
            profileCard.setUserInfo(formData);
            openFormInfo.close();
        }
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
}, form);
openFormInfo.setEventListeners();


//Попап с фулсайз картинкой
const fullSizePopup = new PopupWithImage(pictureForm);
fullSizePopup.setEventListeners();

//Функция открытия фото
<<<<<<< HEAD
function openImagePopup(card) {
    fullSizePopup.open(card);
}


//Попап с добавлением карточек
const photoCard = new PopupWithForm({
    formSubmit: (formData) => {
        photoCard.setLoadingButton();
        api.addNewCard(formData)
        .then((item) => {
            const card = new Card(item, () => api.putLike(item._id), () => api.deleteLike(item._id), 'card_template', openImagePopup, (item) => {
                deleteId = item;
                deleteCardForm.getCardForDelete(card);
                deleteCardForm.open();
            });
            const cardElement = card.generateCard();
            cardList.setItem(cardElement);
            photoCard.setDefaultButton();
        })
        .catch((err) => {
            photoCard.setDefaultButton();
            console.log(err);
        });        
    }
}, addForm);
=======
function openImagePopup(card){
    fullSizePopup.open(card);
}

//Попап с добавлением карточек
const photoCard = new PopupWithForm({formSubmit: (formData)=>{
    const card = new Card(formData, 'card_template', openImagePopup);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
}}, addForm);
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
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


<<<<<<< HEAD
// Попап с изменением аватара
const avatarCard = new PopupWithForm({
    formSubmit: (formData) => {
        avatarCard.setLoadingButton();
        api.changeAvatar(formData)
        .then((item) => {
            document.querySelector('.profile__avatar').setAttribute('src', item.avatar);
            avatarCard.setDefaultButton();
        })
        .catch((err) => {
            avatarCard.setDefaultButton();
            console.log(err);
        });   
    }
}, avatarForm);
avatarCard.setEventListeners();

// Открытие попапа с изменением аватара
function changeAvatarHandler(){
    avatarCard.open();
    avatarInput.value='';
    avatarErrorField.textContent = avatarInput.validationMessage;
    avatarErrorField.classList.toggle('popup__error_active');
}

// Попап с подтверждением удаления карточки
let deleteId;
const deleteCardForm = new PopupWithForm({
    formSubmit: (formData) => {
        api.deleteCard(deleteId._id)        
        .then(() => {
            let cardToDelete = deleteCardForm.returnCard();
            cardToDelete.deleteCard();
        })
        .catch((err) => {
            console.log(err);
        });   
    }
}, deleteForm);
deleteCardForm.setEventListeners();
=======
//Добавление начальных карточек
const cardList = new Section({
    items: initialCards, renderer: (item) => {
        const card = new Card(item, 'card_template', openImagePopup);
        const cardElement = card.generateCard();
        cardList.setItem(cardElement);
    }
}, cardsField);
cardList.addItem();
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5


//Валидация
const profileValidator = new FormValidator(formConfig, form);
profileValidator.enableValidation();

const pictureValidator = new FormValidator(formConfig, addForm);
pictureValidator.enableValidation();

<<<<<<< HEAD
const avatarValidator = new FormValidator(formConfig, avatarForm);
avatarValidator.enableValidation();

editBtn.addEventListener('click', editProfileHandler);
addBtn.addEventListener('click', addPhotoCardHandler);
avatarBtn.addEventListener('click', changeAvatarHandler);
=======

editBtn.addEventListener('click', editProfileHandler);
addBtn.addEventListener('click', addPhotoCardHandler);
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
