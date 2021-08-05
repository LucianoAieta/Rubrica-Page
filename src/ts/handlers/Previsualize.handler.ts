import { setLoadingScreen } from '../loading/loading.screen';

const artificialRequest = ({ type }: { type: string }) => {
    return new Promise<void>((res, rej) => {
        const Cases = {
            Correct: () => res(),
            Error: () => rej('Error!'),
        };

        setTimeout(() => Cases[type](), 3000);
    });
};

export const handlePrevisualizeButton = async () => {
    try {
        setLoadingScreen({ opacity: '1', visibility: 'visible' });
        await artificialRequest({ type: 'Error' });
        setLoadingScreen({ opacity: '0', visibility: 'hidden' });
    } catch (error) {
        console.log(error);
        setLoadingScreen({ opacity: '0', visibility: 'hidden' });
    }
};
