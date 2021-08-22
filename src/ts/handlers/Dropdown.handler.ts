const ArrowImageHTML = `<img class='arrow' src="./arrow.svg" alt="Dropdown Arrow" />`;

export const handleDropdownButton = () => {
    const DropdownElement = document.querySelector('#dropdown');
    DropdownElement.classList.toggle('active');
    const OptionsElement = document.querySelector('.typeOptions');
    OptionsElement.classList.toggle('active');
};

export const handleDropdownOption = Event => {
    const DropdownElement = document.querySelector('#dropdown');
    DropdownElement.classList.toggle('active');
    DropdownElement.innerHTML = Event.target.textContent + ArrowImageHTML;
    const OptionsElement = document.querySelector('.typeOptions');
    OptionsElement.classList.toggle('active');
};
