const showInputError = (formElement, inputElement, errorMessage, FormSet) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(FormSet.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(FormSet.errorClass);
};


const hideInputError = (formElement, inputElement, FormSet) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(FormSet.inputErrorClass);
    errorElement.classList.remove(FormSet.errorClass);
    errorElement.textContent = '';
};


const isValid = (formElement, inputElement, FormSet) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, FormSet);
    } else {
        hideInputError(formElement, inputElement, FormSet);
    }
};

const setEventListeners = (formElement, FormSet) => {
    const inputList = Array.from(formElement.querySelectorAll(FormSet.inputSelector));
    const buttonElement = formElement.querySelector(FormSet.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, FormSet);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, FormSet);
            toggleButtonState(inputList, buttonElement, FormSet);
        });
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement, FormSet) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(FormSet.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(FormSet.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    };
};


const enableValidation = (FormSet) => {
    const formList = Array.from(document.querySelectorAll(FormSet.formElement));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, FormSet);
    });
};


enableValidation({
    formElement: '.popup__container', 
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__item_type_error',
    errorClass: 'popup__error_active' 
});