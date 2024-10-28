import {CarouselCard} from "@/entities/weather/carousel-card";
import classes from './carousel.module.css'
import {ArrowBackwards} from "@/shared/ui/arrow-backwards";
import {ArrowForward} from "@/shared/ui/arrow-forward";

export const Carousel  = () => {
    return (
        <div className={classes.carouselContainer}>
            <div className={classes.carousel}>
                <ArrowBackwards />
                <CarouselCard/>
                <ArrowForward/>
            </div>

        </div>

    )
}