import {CarouselCard} from "@/entities/weather/carousel-card";
import classes from './carousel.module.css'
import {ArrowBackwards} from "@/shared";
import {ArrowForward} from "@/shared";
import {useWeatherStore} from "@/features/weather";

export const Carousel  = () => {
    const temperatureUnit = useWeatherStore(state => state.temperatureUnit)
    const location = useWeatherStore(state => state.location)
    const weather = useWeatherStore(state => state.weather[0])
    return weather ? (
        <div className={classes.carouselContainer}>
            <div className={classes.carousel}>
                <ArrowBackwards />
                <CarouselCard weather={weather} location={location} temperatureUnit={temperatureUnit}/>
                <ArrowForward/>
            </div>

        </div>

    ) : null
}