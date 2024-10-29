import classes from './weather.module.css'
import {Card} from "@/entities/weather/card";
import {useWeatherStore, Weather} from "@/features/weather";
import {formatDate} from "@/shared";

export const WeatherInfo = () => {
    const weatherState = useWeatherStore(state => state.weather)

    const temperatureUnit = useWeatherStore(state => state.temperatureUnit)
    const weather = weatherState.reduce<Weather[][]>((acc, current) => {
        if (current.dt === 1730246400) {
            acc.push([current]);
        } else if (acc.length > 0) {
            acc[acc.length - 1].push(current);
        } else {
            acc.push([current]);
        }
        return acc;
    }, []);
    console.log(weatherState)
    console.log(weather)
    return weather[0] ? (
        <div className={classes.container}>
            {weather[0].map(weather => {
                const time = formatDate(weather.dt)
                    return <Card key={weather.dt_txt} time={time} temperatureUnit={temperatureUnit} weather={weather}/>
                }
            )}
        </div>
    ) : null
}