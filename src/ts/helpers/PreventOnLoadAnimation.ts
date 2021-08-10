import LoadingHTML from '../../pug/blocks/Loading.pug';

export const preventOnLoadAnimation = () => {
    const OverlayElement: HTMLDivElement = document.querySelector('.overlay');
    setTimeout(() => (OverlayElement.style.display = 'block'), 500);
};
