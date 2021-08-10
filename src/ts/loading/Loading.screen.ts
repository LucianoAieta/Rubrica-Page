type LoadingProperties = {
    opacity: string;
    visibility: string;
};

export const setLoaderAndText = ({ visibility, opacity }: LoadingProperties) => {
    const LoadingIcon: HTMLElement = document.querySelector(
        '.loading-container .loading'
    );
    const LoadingText: HTMLElement = document.querySelector('.loading-container .text');
    LoadingIcon.style.opacity = opacity;
    LoadingText.style.visibility = visibility;
};
