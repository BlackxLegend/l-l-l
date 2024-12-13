/**
 * Updates button state and content
 */
export function updateButtonState(button, isLoading) {
  button.disabled = isLoading;
  
  if (isLoading) {
    button.textContent = 'SUBSCRIBING...';
  } else {
    button.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      STAY TUNED
    `;
  }
}