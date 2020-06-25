export class Card {
    constructor(data, selector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = selector;
        this._handleCardClick = () => handleCardClick(data);
    }

    _getTemplate() {
        const cardElement = document.getElementById(this._cardSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => { this._likedHandler(); });
        this._element.querySelector('.place__delete').addEventListener('click', () => { this._deleteHandler(); });
        this._element.querySelector('.place__picture').addEventListener('click', () => { this._handleCardClick(); });
    }

    _likedHandler() {
        this._element.querySelector('.place__like').classList.toggle('place__like_active');
    }

    _deleteHandler() {
        this._element.remove();
    }
    
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.place__picture').src = this._link;
        this._element.querySelector('.place__text').textContent = this._name;
        return this._element;
    }
}
