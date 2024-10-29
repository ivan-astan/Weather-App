import { Header } from "@/widgets/header/ui";
import {UserInputs} from "@/widgets/weather";
import {Carousel} from "@/widgets/weather/carousel";
import {WeatherInfo} from "@/widgets/weather/weather-info";
import {useWeatherStore} from "@/features/weather";
import {Preloader} from "@/shared";



export const Weather = () => {
    const isFetching = useWeatherStore(state => state.isFetching)
  return (
      <div>
        <Header />
          {isFetching ? <Preloader /> : <><UserInputs />
              <Carousel />
              <WeatherInfo/>
          </>
          }

      </div>
  );
};
