import { Search } from '@/features/weather';
import { useNewsStore } from '@/features/news';
import classes from './input.module.css';

export const NewsInput = () => {
    const topic = useNewsStore((state) => state.topic);
    const setTopic = useNewsStore((state) => state.setTopic);
    return (
        <div className={classes.container}>
            <Search
                placeholder={'Search news...'}
                value={topic}
                onSubmit={setTopic}
            />
        </div>
    );
};
