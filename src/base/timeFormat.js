function timeFormat(date) {
    const now = new Date();
    const timeElapsedInSeconds = (now - new Date(date)) / 1000;
  
    if (timeElapsedInSeconds < 60) {
      return `${Math.floor(timeElapsedInSeconds)} seconds ago`;
    } else if (timeElapsedInSeconds < 3600) {
      const minutes = Math.floor(timeElapsedInSeconds / 60);
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeElapsedInSeconds < 86400) {
      const hours = Math.floor(timeElapsedInSeconds / 3600);
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeElapsedInSeconds < 2592000) {
      const days = Math.floor(timeElapsedInSeconds / 86400);
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (timeElapsedInSeconds < 31536000) {
      const months = Math.floor(timeElapsedInSeconds / 2592000);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(timeElapsedInSeconds / 31536000);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  }
  
  module.exports = {timeFormat}