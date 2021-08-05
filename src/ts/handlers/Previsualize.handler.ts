import { setLoadingScreen } from '../loading/loading.screen';

export const handlePrevisualizeButton = () => {
    setLoadingScreen({ opacity: '1', visibility: 'visible' });
    setTimeout(() => setLoadingScreen({ opacity: '0', visibility: 'hidden' }), 5000);
};
