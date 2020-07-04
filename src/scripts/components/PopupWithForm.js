import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor({formSubmit}, popupSelector){
        super (popupSelector);
        this._formSubmit = formSubmit;
<<<<<<< HEAD
        this._submitButton = this._popupSelector.querySelector('.popup__button');
        this._defaultText = this._submitButton.textContent;
=======
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
    }

    _getInputValues(){
        this._inputList = this._popupSelector.querySelectorAll('.popup__item');
        this._formValues = {};       
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;        
    }

<<<<<<< HEAD
    getCardForDelete(item){
        this._cardForDelete = item;
    }

    returnCard(){
        return (this._cardForDelete);
    }

=======
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
    setEventListeners(){
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();      
            this._formSubmit(this._getInputValues());      
            this.close();
          });
        super.setEventListeners();       
    }
<<<<<<< HEAD

    setLoadingButton(){
        this._submitButton.textContent = 'Сохранение...';
    }

    setDefaultButton(){
        this._submitButton.textContent = this._defaultText;
    }
=======
>>>>>>> 706fcf060d2c76fde55dcad55a6c1e2ebd17cdf5
}