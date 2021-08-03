import { getPDF } from './getPDF.types';

export const getPDFData: getPDF = async body => {
    return (
        await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
    ).json();
};
