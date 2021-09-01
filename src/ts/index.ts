import '../sass/styles.sass';
import { preventOnLoadAnimation } from './helpers/PreventOnLoadAnimation';
import { buttonsListeners } from './listeners/Buttons.listeners';
import { dropdownListeners } from './listeners/Dropdown.listeners';
import { imageDropListeners } from './listeners/ImageSelector.listeners';
import { setOverlay } from './loading-screen/Overlay';

buttonsListeners();
dropdownListeners();
imageDropListeners();
preventOnLoadAnimation();
