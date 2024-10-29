import {BASE_GEO_URL} from "@/shared/constants";

export const geocodingAPI = {
    getCoords: async(location: string) => {
        try {
            const response = await fetch(`${BASE_GEO_URL}&limit=1&q=${location.trim()}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }

    }
};
