import classes from './card.module.css'
import cloudySun from '@/shared/assets/images/cloudy-sun.png'
import {TemperatureType, Weather} from "@/features/weather";
import {FC} from "react";
import {kelvinToCelsius, kelvinTofahrenheit} from "@/shared";

type Props = {
    weather: Weather
    temperatureUnit: TemperatureType,
    time: string
}
export const Card: FC<Props> = ({weather, temperatureUnit, time}) => {
    const temperature =temperatureUnit === 'C' ? kelvinToCelsius(weather.main.temp) : kelvinTofahrenheit(weather.main.temp)
    return (
        <div className={classes.container}>
            <span className={classes.time}>{time}</span>
            <img className={classes.icon} src={cloudySun}/>
            <span className={classes.temperature}>{temperature}°</span>
            <div className={classes.block} />
        </div>
    )
}