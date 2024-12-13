const API_BASE_URL = 'https://apis.vyturex.com';

/**
 * Subscribes an email to the newsletter
 * @param {string} email - The email to subscribe
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function subscribeEmail(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/subscribe?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const textResponse = await response.text();
      // Try to parse text as JSON in case content-type is incorrect
      try {
        data = JSON.parse(textResponse);
      } catch {
        data = { message: textResponse };
      }
    }

    // Check if the response indicates success
    if (response.ok && (!data || !data.error)) {
      return {
        success: true,
        message: data?.message || 'Successfully subscribed to the newsletter!'
      };
    }

    // Handle error responses
    throw new Error(data?.message || data?.error || 'Subscription failed');

  } catch (error) {
    console.error('Subscription error:', error);
    
    // Provide a user-friendly error message
    return {
      success: false,
      message: 'Unable to subscribe at the moment. Please try again later.'
    };
  }
}