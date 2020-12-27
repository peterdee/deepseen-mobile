/**
 * Format time (duration)
 * @param {number} value - duration value in seconds
 * @returns {string}
 */
export default (value = 0) => {
  // check if passed argument is a number 
  const toNumber = Number(value);
  if (Number.isNaN(toNumber)) {
    return '00:00';
  }

  const seconds = Math.round(toNumber);
  const fullMinutes = Math.floor(seconds / 60);
  const leftOverSeconds = seconds - (fullMinutes * 60);
  const fullHours = Math.floor(fullMinutes / 60);

  if (fullHours === 0) {
    const formattedMinutes = fullMinutes > 9 ? fullMinutes : `0${fullMinutes}`;
    const formattedSeconds = leftOverSeconds > 9 ? leftOverSeconds : `0${leftOverSeconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const leftOverMinutes = fullMinutes - (fullHours * 60);
  const formattedHours = fullHours > 9 ? fullHours : `0${fullHours}`;
  const formattedMinutes = leftOverMinutes > 9 ? leftOverMinutes : `0${leftOverMinutes}`;
  const formattedSeconds = leftOverSeconds > 9 ? leftOverSeconds : `0${leftOverSeconds}`;
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
