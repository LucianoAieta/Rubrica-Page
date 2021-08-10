import { setLoaderAndText } from '../loading/loading.screen';
import { removeMessageCard, setMessageCard } from '../loading/MessageCard';
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
        setMessageCard();
        setTimeout(finalAnimations, 3000);
    } catch (error) {
        console.log(error);
        console.log('Error! ☠');
        setMessageCard();
        setTimeout(finalAnimations, 3000);
    }
};
