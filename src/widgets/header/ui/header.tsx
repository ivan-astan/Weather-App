import { Navigator } from "@/features/weather";
import classes from "./header.module.css";


export const Header = () => {
  return (

    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={'https://openweathermap.org/img/wn/02d@4x.png'} alt="cloudy" />
        <h1>Weather App</h1>
        <div>
            Your reliable assistant in weather planning!</div>
      </div>
      <Navigator />
    </header>


  );
};
