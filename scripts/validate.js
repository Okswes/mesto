const toggleInputError = (formElement, inputElement, errorMessage, formSet) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if(errorMessage!=''){
        inputElement.classList.add(formSet.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(formSet.errorClass);
    } else{
        inputElement.classList.remove(formSet.inputErrorClass);
        errorElement.classList.remove(formSet.errorClass);
        errorElement.textContent = '';
    }    
};

const isValid = (formElement, inputElement, formSet) => {
    if (!inputElement.validity.valid) {
        toggleInputError(formElement, inputElement, inputElement.validationMessage, formSet);
    } else {
        toggleInputError(formElement, inputElement,'', formSet);
    }
};

const setEventListeners = (formElement, formSet) => {
    const inputList = Array.from(formElement.querySelectorAll(formSet.inputSelector));
    const buttonElement = formElement.querySelector(formSet.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, formSet);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, formSet);
            toggleButtonState(inputList, buttonElement, formSet);
        });
    });
};

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement, formSet) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(formSet.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(formSet.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    };
}; 


const enableValidation = (formSet) => {
    const formLists = Array.from(document.querySelectorAll(formSet.formElement));
    formLists.forEach((formElement) => {
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