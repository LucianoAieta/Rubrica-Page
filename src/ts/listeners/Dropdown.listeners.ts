import { handleDropdownButton, handleDropdownOption } from '../handlers/Dropdown.handler';
import { handleSearchInput } from '../handlers/SearchType.handler';

const dropdownListener = () => {
    const Dropdown = document.querySelector('#dropdown');
    Dropdown.addEventListener('click', handleDropdownButton);
};

export const dropdownOptionsListener = () => {
    const OptionsList = document.querySelectorAll('.typeOption');
    OptionsList.forEach(Element =>
        Element.addEventListener('click', handleDropdownOption)
    );
};

const searchInputListener = () => {
    const SearchInput = document.querySelector('#searchtype');
    SearchInput.addEventListener('input', handleSearchInput);
};

export const dropdownListeners = () => {
    dropdownListener();
    dropdownOptionsListener();
    searchInputListener();
};
