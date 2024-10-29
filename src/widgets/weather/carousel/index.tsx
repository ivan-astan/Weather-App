import {CarouselCard} from "@/entities/weather/carousel-card";
import classes from './carousel.module.css'
import {ArrowBackwards} from "@/shared/ui/arrow-backwards";
import {ArrowForward} from "@/shared/ui/arrow-forward";
import {useWeatherStore} from "@/features/weather";

export const Carousel  = () => {
    const temperature = useWeatherStore(state => state.temperature)
    const location = useWeatherStore(state => state.location)
    const weather = useWeatherStore(state => state.weather[0])
    return (
        <div className={classes.carouselContainer}>
            <div className={classes.carousel}>
                <ArrowBackwards />
                <CarouselCard weather={weather} location={location} temperature={temperature}/>
                <ArrowForward/>
            </div>

        </div>

    )
}