'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  for (const part of sourceString.split(';')) {
    const [key, value] = part.split(':').map((item) => item.trim());

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
