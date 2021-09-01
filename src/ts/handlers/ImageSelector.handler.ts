export const hideSelectedImageCard = () => {
    const SelectedImageCard: HTMLDivElement =
        document.querySelector('#imageSelectedCard');
    SelectedImageCard.style.visibility = 'hidden';
};

export const showSelectedImageCard = () => {
    const SelectedImageCard: HTMLDivElement =
        document.querySelector('#imageSelectedCard');
    SelectedImageCard.style.visibility = 'visible';
};

export const cleanInputFiles = (selector: string) => {
    const Input: HTMLInputElement = document.querySelector(selector);
    Input.value = '';
};

export const handleRemoveImage = () => {
    hideSelectedImageCard();
    cleanInputFiles('#imageInput');
};

export const handleSelectedImage = () => {
    const Input: HTMLInputElement = document.querySelector('#imageInput');
    const { files } = Input;
    try {
        if (!files[0]) throw 'Missing image';
        showSelectedImageCard();
    } catch (error) {
        hideSelectedImageCard();
    }
};
