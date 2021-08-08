import { RestBody, rubricaTypes } from './getPDF.types';

const getInputElementData = (selector: string) => {
    const InputElement: HTMLInputElement = document.querySelector(selector);
    return InputElement.value;
};

const getCheckedButton = (selector: string) => {
    const Buttons: HTMLInputElement[] = Array.from(document.querySelectorAll(selector));
    const CheckedButton = Buttons.find(({ checked }) => checked);
    return CheckedButton.id.toUpperCase();
};

export const getInputsData: () => RestBody = () => {
    const desde = +getInputElementData('#desde');
    const hasta = +getInputElementData('#hasta');
    const libro = getInputElementData('#libro');
    const empresa = getInputElementData('#empresa');
    const ruc = getInputElementData('#ruc');
    const tipoRubrica = getCheckedButton('.radio') as rubricaTypes;
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
