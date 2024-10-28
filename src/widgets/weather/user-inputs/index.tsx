import classes from './inputs.module.css'
import {TemperatureSelect} from "@/features/weather";
import {Search} from "@/features/weather/ui/search";


export const UserInputs = () => {
    return (
        <div className={classes.container}>
           <TemperatureSelect />
           <Search />
        </div>
    )
}