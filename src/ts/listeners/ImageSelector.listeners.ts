import {
    handleRemoveImage,
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

const selectedImageCardListener = () => {
    const RemoveButton = document.querySelector('#deleteImage');
    RemoveButton.addEventListener('click', handleRemoveImage);
};

export const imageDropListeners = () => {
    imageInputListener();
    imageDropAreaListener();
    selectedImageCardListener();
};
