/**
 * Tracks a "Contact" event using the Meta Pixel (fbq).
 * This should be called when a user clicks on a "Book Now" or "Contact" link.
 */
export const trackWhatsAppClick = () => {
  // The 'fbq' function is loaded into the window by the Meta Pixel script in index.html
  if (typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'Contact');
  }
};
