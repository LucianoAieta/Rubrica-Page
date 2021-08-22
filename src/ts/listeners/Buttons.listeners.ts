import { handleDownloadButton } from '../handlers/Download.handler';

const downloadButtonListener = () => {
    const DownloadButton = document.querySelector('#download');
    DownloadButton.addEventListener('click', handleDownloadButton);
};

export const buttonsListeners = () => {
    downloadButtonListener();
};
