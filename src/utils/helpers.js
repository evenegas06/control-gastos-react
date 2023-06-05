/**
 * Converts a number to a string by using the en-US locale.
 * 
 * @param {Number} amount 
 * @returns {String}
 */
export const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};

/**
 * Create a random ID.
 * 
 * @returns {String}
 */
export const generateID = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
};

/**
 * Create a friendly date.
 * 
 * @param {Date} date 
 * @returns {String}
 */
export const formatDate = (date) => {
    const format = new Date(date);

    return format.toLocaleDateString('es-Es', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    });
};