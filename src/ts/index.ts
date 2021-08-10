import '../sass/styles.sass';
import { preventOnLoadAnimation } from './helpers/PreventOnLoadAnimation';
import { ButtonsListeners } from './listeners/Buttons.listeners';
import { setOverlay } from './loading/Overlay';

ButtonsListeners();
preventOnLoadAnimation();
