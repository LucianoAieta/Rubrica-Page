import { handlePrevisualizeButton } from '../handlers/Previsualize.handler';

const PrevisualizeButtonListener = () => {
    const PrevisualizeButton = document.querySelector('#previsualize');
    PrevisualizeButton.addEventListener('click', handlePrevisualizeButton);
};

export const ButtonsListeners = () => {
    PrevisualizeButtonListener();
};
