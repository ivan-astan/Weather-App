import { Header } from "@/widgets/header/ui";
import {UserInputs} from "@/widgets/weather";
import {Carousel} from "@/widgets/weather/carousel";
import {WeatherInfo} from "@/widgets/weather/weather-info";


export const Weather = () => {
  return (
      <div>
        <Header />
        <UserInputs />
        <Carousel />
        <WeatherInfo/>
      </div>
  );
};
