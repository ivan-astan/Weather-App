export const capitalize = (val: string) => {
    return val.charAt(0).toUpperCase() + String(val).slice(1);
}
export const kelvinToCelsius = (deg: number) => {
    return Math.round(deg - 273.15)
}
export const kelvinTofahrenheit = (deg: number) => {
    return Math.round((deg-273.15) * (5/9) + 32)
}
export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Преобразуем в миллисекунды
    const hours = String(date.getUTCHours()).padStart(2, '0'); // Получаем часы
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`
}