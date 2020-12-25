/**
 * Format the track name
 * @param {string} name - track name
 * @returns {string}
 */
export default (name: string): string => {
  if (!name) {
    return '';
  }

  const partials = name.split('.');
  if (partials.length === 1) {
    return name;
  }

  const partialsLength = partials.length - 1;
  const extension = partials[partialsLength];
  return `${partials.slice(0, partialsLength).join('.')} [${extension.toUpperCase()}]`;
};
