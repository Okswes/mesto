import { Popup } from './Popup.js';

export class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(item){
        this._popupSelector.querySelector('.popup__full-picture').setAttribute('src', item.link);
        this._popupSelector.querySelector('.popup__full-picture').setAttribute('alt', item.name);
        this._popupSelector.querySelector('.popup__picture-title').textContent = item.name;
        super.open();
    }
}