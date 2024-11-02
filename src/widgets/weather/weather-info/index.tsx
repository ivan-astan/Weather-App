import classes from './weather.module.css';
import { Card } from '@/entities/weather/card';
import { useWeatherStore, Weather } from '@/features/weather';
import { formatDateToTime } from '@/shared';
import { useDayStore } from '@/widgets/weather/model/useDayStore.ts';

export const WeatherInfo = () => {
    const weatherState = useWeatherStore((state) => state.weather);
    const day = useDayStore((state) => state.day);
    const temperatureUnit = useWeatherStore((state) => state.temperatureUnit);
    const weather = weatherState.reduce<Weather[][]>((acc, current) => {
        if (formatDateToTime(current.dt) === '00:00') {
            acc.push([current]);
        } else if (acc.length > 0) {
            acc[acc.length - 1].push(current);
        } else {
            acc.push([current]);
        }
        return acc;
    }, []);
    return weather[day] ? (
        <div className={classes.container}>
            {weather[day].map((weather) => {
                const time = formatDateToTime(weather.dt);
                return (
                    <Card
                        key={weather.dt_txt}
                        time={time}
                        temperatureUnit={temperatureUnit}
                        weather={weather}
                    />
                );
            })}
        </div>
    ) : null;
};
