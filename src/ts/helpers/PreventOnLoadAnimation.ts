import LoadingHTML from '../../pug/blocks/Loading.pug';

export const preventOnLoadAnimation = () => {
    const BackgroundElement = document.createElement('div');
    BackgroundElement.classList.add('loading-background');
    BackgroundElement.innerHTML = LoadingHTML({ js: true });
    document.body.appendChild(BackgroundElement);
    setTimeout(() => (BackgroundElement.style.display = 'flex'), 500);
};
