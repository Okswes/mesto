export class Popup{
    constructor(popupSelector){
        this._popupSelector = popupSelector;
        
        this._handleEscClose = (evt) =>{
            if (evt.key === 'Escape') {
                this.close();
            }
        };
    }
    
    setEventListeners(){
        this.closeButton = this._popupSelector.querySelector('.close-button');
        this.closeButton.addEventListener('click', () => this.close());
    }
    
    _closeOnClickHandler(evt) {
        if (evt.target.classList.contains('popup')) {
            evt.target.classList.remove('popup_opened');
        }
    }

    open(){
        this._popupSelector.classList.add('popup_opened');  
        document.addEventListener('keydown', this._handleEscClose);
        document.addEventListener('click', this._closeOnClickHandler);       
    }

    close(){
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        document.removeEventListener('click', this._closeOnClickHandler);
    }
}