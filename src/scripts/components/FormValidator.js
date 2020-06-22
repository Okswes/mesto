export class FormValidator {
    constructor(object, form) {
        this._formElement = form;
        this._inputSelector = object.inputSelector;
        this._submitButtonSelector = object.submitButtonSelector;
        this._inactiveButtonClass = object.inactiveButtonClass;
        this._inputErrorClass = object.inputErrorClass;
        this._errorClass = object.errorClass;
    }

    _toggleInputError(formElement, inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.toggle(this._inputErrorClass, errorMessage);
        errorElement.textContent = errorMessage;
        errorElement.classList.toggle(this._errorClass, errorMessage);
    }

    _checkValidity(formElement, inputElement) {
        this._toggleInputError(formElement, inputElement, inputElement.validationMessage);
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, buttonElement) {
        buttonElement.classList.toggle(this._inactiveButtonClass, this._hasInvalidInput(inputList));
        buttonElement.disabled = this._hasInvalidInput(inputList);
    }

    _setEventListeners(formElement) {
        const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputs, buttonElement);
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkValidity(formElement, inputElement);
                this._toggleButtonState(inputs, buttonElement);
            });
        });
    }

    enableValidation() {
        this._setEventListeners(this._element);
    }
}