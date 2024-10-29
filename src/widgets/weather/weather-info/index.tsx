import classes from './weather.module.css'
import {Card} from "@/entities/weather/card";
import {useWeatherStore} from "@/features/weather";
import {formatDate} from "@/shared";

export const WeatherInfo = () => {
    const weather = useWeatherStore(state => state.weather)
    const temperatureUnit = useWeatherStore(state => state.temperatureUnit)
    const lastIndex = weather.findIndex(weather => formatDate(weather.dt) === '00:00')
    return weather[0] ?(
        <div className={classes.container}>
            {weather.map((weather, i) => {
                const time = formatDate(weather.dt)
                    return i <= lastIndex ? <Card time={time} temperatureUnit={temperatureUnit} weather={weather}/> : null
                }
            )}
        </div>
    ) : null
}