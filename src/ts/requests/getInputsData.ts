import { RestBody } from './getPDF.types';

const getInputElementData = (selector: string) => {
    const InputElement: HTMLInputElement = document.querySelector(selector);
    if (InputElement.value === '') throw 'Void input';
    return InputElement.value;
};

const getSelectedType = (selector: string) => {
    const DropdownElement: HTMLInputElement = document.querySelector(selector);
    if (DropdownElement.textContent === 'Seleccione un tipo') throw 'Invalid type';
    return DropdownElement.textContent.toUpperCase();
};

const getUploadedImage = (selector: string) => {
    const ImageInputElement: HTMLInputElement = document.querySelector(selector);
    if (!ImageInputElement.files[0]) throw 'Missing image';
    return ImageInputElement.files[0];
};

export const getInputsData: () => RestBody = () => {
    const desde = +getInputElementData('#desde');
    const hasta = +getInputElementData('#hasta');
    const libro = getInputElementData('#libro');
    const empresa = getInputElementData('#empresa');
    const ruc = getInputElementData('#ruc');
    const tipoRubrica = getSelectedType('#dropdown');
    const logo = getUploadedImage('#imageInput');
    const body: RestBody = {
        desde,
        hasta,
        libro,
        empresa,
        ruc,
        tipoRubrica,
        logo,
    };
    return body;
};
