import { dropdownOptionsListener } from '../listeners/Dropdown.listeners';

export const rubricaTypes = ['Mayor', 'Diario', 'Ventas', 'Compras'];

export const handleSearchInput = ({ target }) => {
    const SearchedTypes = rubricaTypes.filter(el =>
        el.toLowerCase().includes(target.value.toLowerCase())
    );
    const setDivElement = (acc: string, el: string) =>
        acc + `<div class='typeOption'>${el}</div>`;
    const OptionsHTML = SearchedTypes.reduce(setDivElement, '');
    const OptionsContainer = document.querySelector('.optionsContainer');
    OptionsContainer.innerHTML = OptionsHTML;
    dropdownOptionsListener();
};
