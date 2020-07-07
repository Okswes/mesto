import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor({formSubmit}, popupSelector){
        super (popupSelector);
        this._formSubmit = formSubmit;
        this._submitButton = this._popupSelector.querySelector('.popup__button');
        this._defaultText = this._submitButton.textContent;
        this._inputList = this._popupSelector.querySelectorAll('.popup__item');
        this._errorsList = this._popupSelector.querySelectorAll('.popup__error');        
    }

    open(){
        super.open();
        this._errorsList.forEach(error => {
            error.textContent = '';
            error.classList.remove('popup__error_active');
        });
        this._inputList.forEach(input => {
            input.classList.remove('popup__item_type_error');
        });
        if(this._popupSelector.classList.contains('popup_type_info')){
            this._submitButton.removeAttribute('disabled');
            this._submitButton.classList.remove('popup__button_inactive');
        }
        else{
            this._submitButton.setAttribute('disabled', true);
            this._submitButton.classList.add('popup__button_inactive');
        }  
    }

    _getInputValues(){
        this._formValues = {};       
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;        
    }

    getCardForDelete(item){
        this._cardForDelete = item;
    }

    returnCard(){
        return (this._cardForDelete);
    }

    setEventListeners(){
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();      
            this._formSubmit(this._getInputValues());      
          });
        super.setEventListeners();       
    }

    setLoadingButton(){
        this._submitButton.textContent = 'Сохранение...';
    }

    setDefaultButton(){
        this._submitButton.textContent = this._defaultText;
    }
}