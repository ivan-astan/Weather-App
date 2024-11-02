import classes from './arrow-back.module.css';

export const ArrowBackwards = (props: any) => {
    return (
        <div className={classes.arrow} {...props}>
            <div className={classes.arrowTop} />
            <div className={classes.arrowBot} />
        </div>
    );
};
