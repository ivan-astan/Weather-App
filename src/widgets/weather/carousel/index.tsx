import {CarouselCard} from "@/entities/weather/carousel-card";
import classes from './carousel.module.css'
import {ArrowBackwards, formatDateToTime} from "@/shared";
import {ArrowForward} from "@/shared";
import {useWeatherStore} from "@/features/weather";
import {useDayStore} from "@/widgets/weather/model/useDayStore.ts";

export const Carousel  = () => {
    const time = useDayStore(state => state.time);
    const changeTime = useDayStore(state => state.changeTime)
    const incrementDay = useDayStore(state => state.incrementDay)
    const decrementDay = useDayStore(state => state.decrementDay)
    const temperatureUnit = useWeatherStore(state => state.temperatureUnit)
    const location = useWeatherStore(state => state.location)
    const weather = useWeatherStore(state => state.weather)
    return weather[time] ? (
        <div className={classes.carouselContainer}>
            <div className={classes.carousel}>
                {time > 0 && <ArrowBackwards onClick={()=> {
                    changeTime(time - 1)
                    if (formatDateToTime(weather[time].dt) === '00:00') decrementDay()
                }} />}
                <CarouselCard weather={weather[time]} location={location} temperatureUnit={temperatureUnit}/>
                {time < weather.length - 1 && <ArrowForward onClick={()=>{
                    changeTime(time + 1)
                    if (formatDateToTime(weather[time].dt) === '21:00') incrementDay()
                }}/>}
            </div>
        </div>

    ) : null
}