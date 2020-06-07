import { popupOpenHandler, popupImg, popupTitle, pictureForm } from "./index.js";

export class Card {
    constructor(data, selector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = selector;
    }

    _getTemplate() {
        const cardElement = document.getElementById('card_template')
            .content
            .querySelector('.place')
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => { this._likedHandler(); });
        this._element.querySelector('.place__delete').addEventListener('click', () => { this._deleteHandler(); });
        this._element.querySelector('.place__picture').addEventListener('click', () => { this._fullsizeHandler(); });
    }

    _likedHandler() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _deleteHandler() {
        this._element.remove();
    }

    _fullsizeHandler() {
        popupOpenHandler(pictureForm);
        popupImg.src = this._link;
        popupTitle.textContent = this._name;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.place__picture').src = this._link;
        this._element.querySelector('.place__text').textContent = this._name;
        return this._element;
    }
}