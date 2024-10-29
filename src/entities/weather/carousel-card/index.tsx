import classes from "./carouselCard.module.css";
import locationIcon from '@/entities/weather/assets/images/location.png'
import cloudySun from '@/shared/assets/images/cloudy-sun.png'
import temperatureIcon from '@/entities/weather/assets/images/temperature.png'
import {TemperatureType, Weather} from "@/features/weather";
import {FC} from "react";
import {kelvinToCelsius, kelvinTofahrenheit} from "@/shared";

type Props = {
    temperatureUnit: TemperatureType
    location: string,
    weather: Weather
}
export const CarouselCard: FC<Props> = ({temperatureUnit, location, weather}) => {
  return  (
    <div className={classes.container}>
        <div className={classes.city}>
            <h3>{location}</h3>
            <img alt='location' src={locationIcon}/>
        </div>
      
      <div className={classes.temperature}>
        <img alt='temperature' className={classes.temperatureImg} src={temperatureIcon}/>
        <h4>{temperatureUnit === 'F' ? kelvinTofahrenheit(weather.main.temp) : kelvinToCelsius(weather.main.temp) }°{temperatureUnit}</h4>
        <img alt='weather img' className={classes.weather} src={cloudySun}/>
      </div>
      <span className={classes.date}>{weather.dt_txt}</span>
      <div className={classes.weatherInfo}>
        <h5 className={classes.info}>
          <div>Humidity</div>
          <div>{weather.main.humidity}%</div>
        </h5>
        <h5 className={classes.info}>
          <div>VISIBILITY</div>
          <div>{weather.visibility}</div>
        </h5>
        <h5 className={classes.info}>
          <div>Air Pressure</div>
          <div>{weather.main.pressure}</div>
        </h5>
        <h5 className={classes.info}>
          <div>WIND</div>
          <div>{weather.wind.speed}</div>
        </h5>
      </div>
    </div>
  ) ;
};
