type LoadingProperties = {
    opacity: string;
    visibility: string;
};

export const setLoadingScreen = ({
    opacity = '0',
    visibility = 'hidden',
}: LoadingProperties) => {
    const LoadingElement: HTMLDivElement = document.querySelector('.loading-background');
    LoadingElement.style.opacity = opacity;
    LoadingElement.style.visibility = visibility;
};
