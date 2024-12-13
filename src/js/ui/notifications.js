/**
 * Creates and shows a notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification ('success' | 'error')
 */
export function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `cyber-notification ${type}`;
  
  const content = document.createElement('div');
  content.className = 'notification-content';
  content.textContent = message;
  
  const progressBar = document.createElement('div');
  progressBar.className = 'notification-progress';
  
  notification.appendChild(content);
  notification.appendChild(progressBar);
  
  document.body.appendChild(notification);
  
  // Trigger animation
  requestAnimationFrame(() => {
    notification.classList.add('show');
  });
  
  // Remove notification after animation
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}