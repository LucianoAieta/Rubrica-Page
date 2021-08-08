import { getPDF } from './getPDF.types';

const ServerLocalhost = 'http://localhost:8080';

export const getPDFData: getPDF = async body => {
    const FetchedPDF = await fetch(`${ServerLocalhost}/rubrica`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    return await FetchedPDF.blob();
};
