import '../css/style.css';
import { router } from '../routes/index.routers'

router(window.location.hash);

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});



