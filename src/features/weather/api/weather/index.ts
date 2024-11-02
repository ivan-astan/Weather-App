import { BASE_WEATHER_URL } from '@/shared/constants';

export const weatherAPI = {
    getWeather: async (lat: number, lon: number) => {
        try {
            const response = await fetch(
                `${BASE_WEATHER_URL}&lat=${lat}&lon=${lon}`
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
            throw error;
        }
    },
};
