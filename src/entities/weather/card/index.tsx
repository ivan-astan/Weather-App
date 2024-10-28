import classes from './card.module.css'
import cloudySun from '@/shared/assets/images/cloudy-sun.png'

export const Card = () => {
    return (
        <div className={classes.container}>
            <span className={classes.time}>1:00 am</span>
            <img className={classes.icon} src={cloudySun}/>
            <span className={classes.temperature}>26°</span>
            <div className={classes.block} />
        </div>
    )
}