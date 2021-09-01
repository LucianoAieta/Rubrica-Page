export const setOverlay = ({ opacity, visibility }) => {
    const OverlayElement: HTMLElement = document.querySelector('.overlay');
    OverlayElement.style.opacity = opacity;
    OverlayElement.style.visibility = visibility;
};
