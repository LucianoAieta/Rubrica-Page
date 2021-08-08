import { setLoadingScreen } from '../loading/loading.screen';
import { getInputsData } from '../requests/getInputsData';
import { getPDFData } from '../requests/getPDF.request';
import { downloadPDF } from './PDF.handlers';

export const handleDownloadButton = async () => {
    try {
        setLoadingScreen({ opacity: '1', visibility: 'visible' });
        downloadPDF(await getPDFData(getInputsData()));
        setLoadingScreen({ opacity: '0', visibility: 'hidden' });
    } catch (error) {
        console.log(error);
        setLoadingScreen({ opacity: '0', visibility: 'hidden' });
    }
};
