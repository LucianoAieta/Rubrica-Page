import {
    handleRemoveImage,
    handleReselectImage,
    handleSelectedImage,
    hideSelectedImageCard,
    showSelectedImageCard,
} from '../handlers/ImageSelector.handler';

const imageDropAreaListener = () => {
    const ImageDropArea = document.querySelector('#imageDropArea');
    ImageDropArea.addEventListener('dragover', e => {
        e.preventDefault();
        e.stopPropagation();
    });
    ImageDropArea.addEventListener('drop', (e: any) => {
        e.preventDefault();
        e.stopPropagation();
    });
};

const imageInputListener = () => {
    const Input: HTMLInputElement = document.querySelector('#imageInput');
    Input.addEventListener('change', handleSelectedImage);
};

const removeButtonListener = () => {
    const RemoveButton = document.querySelector('#deleteImage');
    RemoveButton.addEventListener('click', handleRemoveImage);
};

const reselectButtonListener = () => {
    const ReselectButton = document.querySelector('#reselectImage');
    ReselectButton.addEventListener('click', handleReselectImage);
};

export const imageDropListeners = () => {
    imageInputListener();
    imageDropAreaListener();
    removeButtonListener();
    reselectButtonListener();
};
