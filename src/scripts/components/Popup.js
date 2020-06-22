export class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector;
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners(){
        this.closeButton = this._popupSelector.querySelector('.close-button');
        this.closeButton.addEventListener('click', () => this.close());
    }

    open(){
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}