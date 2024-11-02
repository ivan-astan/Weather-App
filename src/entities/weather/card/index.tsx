import classes from './card.module.css';
import { TemperatureType, Weather } from '@/features/weather';
import { FC, memo } from 'react';
import { kelvinToCelsius, kelvinTofahrenheit } from '@/shared';

type Props = {
    weather: Weather;
    temperatureUnit: TemperatureType;
    time: string;
};
export const Card: FC<Props> = memo(({ weather, temperatureUnit, time }) => {
    const temperature =
        temperatureUnit === 'C'
            ? kelvinToCelsius(weather.main.temp)
            : kelvinTofahrenheit(weather.main.temp);
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
    return (
        <div className={classes.container}>
            <span className={classes.time}>{time}</span>
            <img className={classes.icon} src={weatherIcon} />
            <span className={classes.temperature}>{temperature}°</span>
            <div className={classes.block} />
        </div>
    );
});
