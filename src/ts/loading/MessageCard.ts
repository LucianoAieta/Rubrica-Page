import CardHTML from '../../pug/blocks/MessageCard.pug';
import { finalAnimations } from '../handlers/Download.handler';

export const setMessageCard = ({ href, message }) => {
    const OverlayElement = document.querySelector('.overlay');
    const CardElement = document.createElement('div');
    CardElement.classList.add('message-card');
    CardElement.innerHTML = CardHTML({
        js: true,
        href,
        message,
    });
    OverlayElement.appendChild(CardElement);
    CardElement.classList.add('active');
};

export const removeMessageCard = () => {
    const CardElement = document.querySelector('.message-card');
    CardElement.addEventListener('animationend', CardElement.remove);
    CardElement.classList.add('off');
};

export const messageCardListeners = Timeout => {
    const ExitButton = document.querySelector('#exit');
    ExitButton.addEventListener('click', () => {
        clearTimeout(Timeout);
        finalAnimations();
    });
};
