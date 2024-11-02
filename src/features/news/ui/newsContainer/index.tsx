import { NewsCard } from '@/entities/news/card';
import classes from './news.module.css';
import { useNewsStore } from '@/features/news';

export const NewsContainer = () => {
    const news = useNewsStore((state) => state.news); // Assuming useNewsStore is a custom hook
    return (
        <div className={classes.container}>
            {news.map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
            ))}
        </div>
    );
};
