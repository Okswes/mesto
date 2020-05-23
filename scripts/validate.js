const toggleInputError = (formElement, inputElement, errorMessage, formSet) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.toggle(formSet.inputErrorClass, errorMessage);
    errorElement.textContent = errorMessage;
    errorElement.classList.toggle(formSet.errorClass, errorMessage);
};

const isValid = (formElement, inputElement, formSet) => {
        toggleInputError(formElement, inputElement, inputElement.validationMessage, formSet);
};

const setEventListeners = (formElement, formSet) => {
    const inputs = Array.from(formElement.querySelectorAll(formSet.inputSelector));
    const buttonElement = formElement.querySelector(formSet.submitButtonSelector);
    toggleButtonState(inputs, buttonElement, formSet);
    inputs.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, formSet);
            toggleButtonState(inputs, buttonElement, formSet);
        });
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};


function toggleButtonState(inputList, buttonElement, formSet) {
    buttonElement.classList.toggle(formSet.inactiveButtonClass, hasInvalidInput(inputList)); 
    buttonElement.disabled = hasInvalidInput(inputList); 
};

const enableValidation = (formSet) => {
    const formElements = Array.from(document.querySelectorAll(formSet.formElement));
    formElements.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, formSet);
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