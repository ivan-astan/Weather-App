import classes from './arrow-forward.module.css';

export const ArrowForward = (props: any) => {
    return (
        <div className={classes.arrow} {...props}>
            <div className={classes.arrowTop} />
            <div className={classes.arrowBot} />
        </div>
    );
};
