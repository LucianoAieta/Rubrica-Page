import { handleDownloadButton } from '../handlers/Download.handler';

const DownloadButtonListener = () => {
    const DownloadButton = document.querySelector('#download');
    DownloadButton.addEventListener('click', handleDownloadButton);
};

export const ButtonsListeners = () => {
    DownloadButtonListener();
};
