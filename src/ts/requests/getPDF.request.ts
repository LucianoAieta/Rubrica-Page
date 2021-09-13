import { getPDF, RestBody } from './getPDF.types';

const ServerLocalhost = 'http://localhost:8080';

const getFormData = (body: RestBody) => {
    const BodyToBeSend = new FormData();
    Object.keys(body).forEach(ObjectKey => {
        BodyToBeSend.append(ObjectKey, body[ObjectKey]);
    });
    return BodyToBeSend;
};

export const getPDFData: getPDF = async body => {
    const FetchedPDF = await fetch(`${ServerLocalhost}/rubrica`, {
        method: 'POST',
        body: getFormData(body),
    });

    return await FetchedPDF.blob();
};
