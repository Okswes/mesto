export class Card {
    constructor(data, putlike, deletelike, selector, handleCardClick, handleCardDelete) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data.id;
        this._owner = data.owner;
        this._putLike = putlike;
        this._deleteLike = deletelike;
        this._cardSelector = selector;
        this._handleCardClick = () => handleCardClick(data);
        this._handleCardDelete = () => handleCardDelete();
    }

    _getTemplate() {
        const cardElement = document.getElementById(this._cardSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);
            cardElement.id = this._id;
        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', () => { this._likedHandler(); });
        this._element.querySelector('.place__picture').addEventListener('click', () => { this._handleCardClick(); });
        this._element.querySelector('.place__delete').addEventListener('click', () => { this._handleCardDelete(); });
    }

    _likedHandler() {
        const elem = this._element.querySelector('.place__like');
        if (!(elem.classList.contains('place__like_active'))) {
            elem.classList.toggle('place__like_active');
            this._putLike(this._id);
            this._element.querySelector('.place__likecount').textContent = this._likes.length += 1;
        }
        else {
            elem.classList.toggle('place__like_active');
            this._deleteLike(this._id);
            this._element.querySelector('.place__likecount').textContent = this._likes.length -= 1;
        }

    }

    _likeCheck() {
        this._likes.some((item) => {
            if (item._id === 'c0c97ab9d4e54bfa8476ce4a') {
                this._element.querySelector('.place__like').classList.add('place__like_active');
            }
        })
    }

    _deleteCheck() {
        if (!(this._owner._id === 'c0c97ab9d4e54bfa8476ce4a')) {
            this._element.querySelector('.place__delete').style.display = 'none';
        }
    }

    deleteCard() {
        this._element.remove();
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._likeCheck();
        this._deleteCheck();
        this._element.querySelector('.place__picture').src = this._link;
        this._element.querySelector('.place__text').textContent = this._name;
        this._element.querySelector('.place__likecount').textContent = this._likes.length;
        return this._element;
    }
}
