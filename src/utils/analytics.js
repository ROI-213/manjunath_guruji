// Analytics Event Tracker for Astro Psychic India

const eventLogs = [];

export const trackEvent = (eventName, payload = {}) => {
  const event = {
    eventName,
    payload,
    timestamp: new Date().toISOString(),
    url: window.location.href
  };

  eventLogs.unshift(event);
  
  // Also log to browser console for developer inspection
  console.log(`[ANALYTICS EVENT] ${eventName}:`, payload);

  return event;
};

export const getEventLogs = () => eventLogs;
