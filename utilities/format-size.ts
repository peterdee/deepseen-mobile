/**
 * Format file size
 * @param {number | string} size - file size in bytes
 * @returns {string}
 */
export default (size: number | string): string => {
  if (!size) {
    return 'Not available';
  }

  const bytes = Number(size);
  if (Number.isNaN(bytes)) {
    return 'Not available';
  }

  // bytes
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  // kilobytes
  if (bytes < (1024 * 1024)) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  // megabytes
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};
