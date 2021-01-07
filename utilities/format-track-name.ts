/**
 * Format the track name
 * @param {string} name - track name
 * @param {boolean} showExtension - if file extension should be shown
 * @returns {string}
 */
export default (name: string, showExtension: boolean = true): string => {
  if (!name) {
    return '';
  }

  const partials = name.split('.');
  if (partials.length === 1) {
    return name;
  }

  const partialsLength = partials.length - 1;
  const extension = partials[partialsLength];
  return `${partials.slice(0, partialsLength).join('.')}${showExtension
    ? ` [${extension.toUpperCase()}]`
    : ''}`;
};
