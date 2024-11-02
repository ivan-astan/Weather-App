import classes from './carouselCard.module.css';
import locationIcon from '@/entities/weather/assets/images/location.png';
import temperatureIcon from '@/entities/weather/assets/images/temperature.png';
import { TemperatureType, Weather } from '@/features/weather';
import { FC, memo } from 'react';
import { kelvinToCelsius, kelvinTofahrenheit, formatDateTime } from '@/shared';

type Props = {
    temperatureUnit: TemperatureType;
    location: string;
    weather: Weather;
};
export const CarouselCard: FC<Props> = memo(
    ({ temperatureUnit, location, weather }) => {
        const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
        return (
            <div className={classes.container}>
                <div className={classes.city}>
                    <h3>{location}</h3>
                    <img alt="location" src={locationIcon} />
                </div>

                <div className={classes.temperature}>
                    <img
                        alt="temperature"
                        className={classes.temperatureImg}
                        src={temperatureIcon}
                    />
                    <h4>
                        {temperatureUnit === 'F'
                            ? kelvinTofahrenheit(weather.main.temp)
                            : kelvinToCelsius(weather.main.temp)}
                        °{temperatureUnit}
                    </h4>
                    <img
                        alt="weather img"
                        className={classes.weather}
                        src={weatherIcon}
                    />
                </div>
                <span className={classes.date}>
                    {formatDateTime(weather.dt_txt)}
                </span>
                <div className={classes.weatherInfo}>
                    <h5 className={classes.info}>
                        <div>Humidity</div>
                        <div>{weather.main.humidity}%</div>
                    </h5>
                    <h5 className={classes.info}>
                        <div>VISIBILITY</div>
                        <div>
                            {Math.round(weather.visibility / 1000) || '0'}km
                        </div>
                    </h5>
                    <h5 className={classes.info}>
                        <div>Air Pressure</div>
                        <div>{weather.main.pressure}hPa</div>
                    </h5>
                    <h5 className={classes.info}>
                        <div>WIND</div>
                        <div>{weather.wind.speed}m/s</div>
                    </h5>
                </div>
            </div>
        );
    }
);
