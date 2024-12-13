import { setupCountdown } from './js/countdown';
import { setupAnimations } from './js/animations';
import { setupSubscribe } from './js/subscribe';

document.addEventListener('DOMContentLoaded', () => {
  setupCountdown();
  setupAnimations();
  setupSubscribe();
});