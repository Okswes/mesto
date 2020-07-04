import { Popup } from "./Popup.js";

export class PopupWithQuestion extends Popup{
    constructor({formSubmit}, popupSelector){
        super (popupSelector);
        this._formSubmit = formSubmit;
    }

    _getInputValues(){
        this._inputList = this._popupSelector.querySelectorAll('.popup__item');
        this._formValues = {};       
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        console.log(this._formValues); 
        return this._formValues;
               
    }

    setEventListeners(){
        this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();      
            this._formSubmit(this._getInputValues());      
            this.close();
          });
        super.setEventListeners();       
    }
}