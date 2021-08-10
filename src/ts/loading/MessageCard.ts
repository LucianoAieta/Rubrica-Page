import CardHTML from '../../pug/blocks/MessageCard.pug';

export const setMessageCard = () => {
    const OverlayElement = document.querySelector('.overlay');
    const CardElement = document.createElement('div');
    CardElement.classList.add('message-card');
    CardElement.innerHTML = CardHTML({
        js: true,
        href: 'check',
        message: 'Archivo generado correctamente!',
    });
    OverlayElement.appendChild(CardElement);
    CardElement.classList.add('active');
};

export const removeMessageCard = () => {
    const CardElement = document.querySelector('.message-card');
    CardElement.addEventListener('animationend', CardElement.remove);
    CardElement.classList.add('off');
};
