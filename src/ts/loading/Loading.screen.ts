type LoadingProperties = {
    opacity: string;
};

export const setLoadingScreen = ({ opacity = '0' }: LoadingProperties) => {
    const LoadingElement: HTMLDivElement = document.querySelector('.loading-container');
    LoadingElement.style.opacity = opacity;
};
