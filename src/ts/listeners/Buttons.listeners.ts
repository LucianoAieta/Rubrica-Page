import { setLoadingScreen } from '../loading/loading.screen';

const PrevisualizeButtonListener = () => {
    const PrevisualizeButton = document.querySelector('#previsualize');
    PrevisualizeButton.addEventListener('click', () =>
        setLoadingScreen({ opacity: '1' })
    );
};

export const ButtonsListeners = () => {
    PrevisualizeButtonListener();
};
