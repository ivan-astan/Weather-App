import classes from './weather.module.css'
import {Card} from "@/entities/weather/card";

export const WeatherInfo = () => {
    return (
        <div className={classes.container}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}