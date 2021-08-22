import '../sass/styles.sass';
import { preventOnLoadAnimation } from './helpers/PreventOnLoadAnimation';
import { buttonsListeners } from './listeners/Buttons.listeners';
import { dropdownListeners } from './listeners/Dropdown.listeners';
import { setOverlay } from './loading/Overlay';

buttonsListeners();
dropdownListeners();
preventOnLoadAnimation();
