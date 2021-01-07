import months from './months';

/**
 * Format date
 * @param {number | string} timestamp - date timestamp
 * @returns {string}
 */
export default (timestamp: number | string): string => {
  if (!timestamp) {
    return 'Not available';
  }

  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate() > 9
    ? date.getDate()
    : `0${date.getDate()}`;
  const hours = date.getHours() > 9
    ? date.getHours()
    : `0${date.getHours()}`;
  const minutes = date.getMinutes() > 9 
    ? date.getMinutes()
    : `0${date.getMinutes()}`;
  return `${month} ${day}, ${year}, at ${hours}:${minutes}`;
};
