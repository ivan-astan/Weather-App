import classes from './inputs.module.css';
import { TemperatureSelect, useWeatherStore } from '@/features/weather';
import { Search } from '@/features/weather/ui/search';

export const UserInputs = () => {
    const location = useWeatherStore((store) => store.location);
    const changeLocation = useWeatherStore((store) => store.changeLocation);
    return (
        <div className={classes.container}>
            <TemperatureSelect />
            <Search
                value={location}
                onSubmit={changeLocation}
                placeholder={'Search location...'}
            />
        </div>
    );
};
