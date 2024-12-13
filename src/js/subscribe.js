import { subscribeEmail } from './api/subscriptionApi';
import { isValidEmail } from './utils/validation';
import { updateButtonState } from './ui/buttonState';
import { showNotification } from './ui/notifications';

export function setupSubscribe() {
  const form = document.querySelector('.subscribe');
  const input = document.querySelector('.cyber-input');
  const button = document.querySelector('.cyber-button');

  async function handleSubmit(e) {
    e.preventDefault();
    
    const email = input.value.trim();
    
    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    try {
      updateButtonState(button, true);
      
      const { success, message } = await subscribeEmail(email);
      
      if (success) {
        input.value = '';
        showNotification(message, 'success');
      } else {
        showNotification(message, 'error');
      }
    } catch (error) {
      showNotification('An unexpected error occurred. Please try again.', 'error');
      console.error('Form submission error:', error);
    } finally {
      updateButtonState(button, false);
    }
  }

  form.addEventListener('submit', handleSubmit);
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      form.dispatchEvent(new Event('submit'));
    }
  });
}