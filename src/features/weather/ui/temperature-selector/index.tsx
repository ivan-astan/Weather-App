import classes from './select.module.css';
import { useWeatherStore } from '@/features/weather';

export const TemperatureSelect = () => {
    const temperatureUnit = useWeatherStore((store) => store.temperatureUnit);
    const changeTemperature = useWeatherStore(
        (store) => store.changeTemperature
    );
    return (
        <div className={classes.container}>
            <span className={classes.temperature}>°C</span>
            <label className={classes.switch}>
                <input
                    type="checkbox"
                    onClick={() =>
                        changeTemperature(temperatureUnit === 'C' ? 'F' : 'C')
                    }
                />
                <span className={classes.slider}>
                    <span
                        className={classes.switcher}
                        style={{
                            left: `${temperatureUnit === 'C' ? '2px' : '62px'}`,
                        }}
                    ></span>
                </span>
            </label>
            <span className={classes.temperature}>°F</span>
        </div>
    );
};
