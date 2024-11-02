export const capitalize = (val: string) => {
    return val.charAt(0).toUpperCase() + String(val).slice(1);
};
export const kelvinToCelsius = (deg: number) => {
    return Math.round(deg - 273.15);
};
export const kelvinTofahrenheit = (deg: number) => {
    return Math.round((deg - 273.15) * (5 / 9) + 32);
};
export const formatDateToTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Преобразуем в миллисекунды
    const hours = String(date.getUTCHours()).padStart(2, '0'); // Получаем часы
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};
export const formatDateTime = (dateTime: string) => {
    const date = new Date(dateTime);

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    return date.toLocaleString('en-GB', options).replace(/ at /, ', ');
};
export const splitArrayIntoChunks = (array: any, chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};
