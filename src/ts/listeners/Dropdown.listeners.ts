import { handleDropdownButton, handleDropdownOption } from '../handlers/Dropdown.handler';

const dropdownListener = () => {
    const Dropdown = document.querySelector('#dropdown');
    Dropdown.addEventListener('click', handleDropdownButton);
};

const dropdownOptionsListener = () => {
    const OptionsList = document.querySelectorAll('.typeOption');
    OptionsList.forEach(Element =>
        Element.addEventListener('click', handleDropdownOption)
    );
};

export const dropdownListeners = () => {
    dropdownListener();
    dropdownOptionsListener();
};
