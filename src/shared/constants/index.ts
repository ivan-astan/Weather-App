const WEATHER_API_KEY = '3e09a27ab1be169e21323c1bd79736e0';
export const BASE_GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?appid=${WEATHER_API_KEY}&limit=10`;
export const BASE_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

const NEWS_API_KEY = '55ac01c7f46642a5b1794efd893cdb6a';
export const BASE_NEWS_URL = `https://api.worldnewsapi.com/search-news?api-key=${NEWS_API_KEY}`;
