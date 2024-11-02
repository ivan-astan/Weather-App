import { FC, memo, useState } from 'react';
import classes from './navigator.module.css';
import { useNavigate } from 'react-router-dom';
type Props = {
    header: string;
};
export const Navigator: FC<Props> = memo(({ header }) => {
    const [active, setActive] = useState(header);
    const navigate = useNavigate();
    return (
        <nav className={classes.nav}>
            <div
                onClick={() => {
                    setActive('weather');
                    navigate('/weather');
                }}
                className={active === 'weather' ? classes.active : ''}
            >
                Weather
            </div>
            <div
                onClick={() => {
                    setActive('news');
                    navigate('/news');
                }}
                className={active === 'news' ? classes.active : ''}
            >
                News
            </div>
        </nav>
    );
});
