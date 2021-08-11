import { setLoaderAndText } from '../loading/loading.screen';
import {
    messageCardListeners,
    removeMessageCard,
    setMessageCard,
} from '../loading/MessageCard';
import { setOverlay } from '../loading/Overlay';
import { getInputsData } from '../requests/getInputsData';
import { getPDFData } from '../requests/getPDF.request';
import { downloadPDF } from './PDF.handlers';

export const finalAnimations = () => {
    setOverlay({ opacity: '0', visibility: 'hidden' });
    removeMessageCard();
};

export const handleDownloadButton = async () => {
    try {
        setOverlay({ opacity: '1', visibility: 'visible' });
        setLoaderAndText({ opacity: '1', visibility: 'visible' });
        downloadPDF(await getPDFData(getInputsData()));
        setLoaderAndText({ opacity: '0', visibility: 'hidden' });
        setMessageCard({ href: 'check', message: 'Archivo generado correctamente!' });
        const ExitTimeout = setTimeout(finalAnimations, 3000);
        messageCardListeners(ExitTimeout);
    } catch (error) {
        setLoaderAndText({ opacity: '0', visibility: 'hidden' });
        setMessageCard({ href: 'error', message: 'Ocurrió un error, intente de nuevo.' });
        const ExitTimeout = setTimeout(finalAnimations, 3000);
        messageCardListeners(ExitTimeout);
    }
};
