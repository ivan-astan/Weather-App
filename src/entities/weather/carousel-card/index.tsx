import classes from "./carouselCard.module.css";
import location from '@/entities/weather/assets/images/location.png'
import temperature from '@/entities/weather/assets/images/temperature.png'
import cloudySun from '@/shared/assets/images/cloudy-sun.png'

export const CarouselCard = () => {
  return (
    <div className={classes.container}>
        <div className={classes.city}>
            <h3>Burdwan</h3>
            <img src={location}/>
        </div>
      
      <div className={classes.temperature}>
        <img className={classes.temperatureImg} src={temperature}/>
        <h4>27°C</h4>
        <img className={classes.weather} src={cloudySun}/>
      </div>
      <span className={classes.date}>Aug 23,  Tue</span>
      <div className={classes.weatherInfo}>
        <h5 className={classes.info}>
          <div>Humidity</div>
          <div>99%</div>
        </h5>
        <h5 className={classes.info}>
          <div>VISIBILITY</div>
          <div>8km</div>
        </h5>
        <h5 className={classes.info}>
          <div>Air Pressure</div>
          <div>1005hPa</div>
        </h5>
        <h5 className={classes.info}>
          <div>WIND</div>
          <div>2mph</div>
        </h5>
      </div>
    </div>
  );
};
