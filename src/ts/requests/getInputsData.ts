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

export const getInputsData: () => RestBody = () => {
    const desde = +getInputElementData('#desde');
    const hasta = +getInputElementData('#hasta');
    const libro = getInputElementData('#libro');
    const empresa = getInputElementData('#empresa');
    const ruc = getInputElementData('#ruc');
    const tipoRubrica = getSelectedType('#dropdown');
    const body: RestBody = {
        desde,
        hasta,
        libro,
        empresa,
        ruc,
        tipoRubrica,
    };
    return body;
};
