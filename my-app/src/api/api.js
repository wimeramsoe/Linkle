// src/api.js

const BASE_URL = "http://127.0.0.1:5000";

/**
 * Fetch all pins
 * @returns {Promise<Object[]>} Array of pins
 */
export const fetchPins = async () => {
    try {
        const response = await fetch(`${BASE_URL}/pins`);
        if (!response.ok) {
            throw new Error(`Error fetching pins: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Fetch bathroom details by PIN ID
 * @param {string} pinId - The ID of the pin
 * @returns {Promise<Object>} Bathroom details
 */
export const fetchBathroomDetails = async (pinId) => {
    try {
        const response = await fetch(`${BASE_URL}/bathroom/${pinId}`);
        if (!response.ok) {
            throw new Error(`Error fetching bathroom details: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
