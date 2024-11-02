import { NewsCard } from '@/entities/news/card';
import classes from './news.module.css';
import { useNewsStore } from '@/features/news';
import { Pagination, Preloader } from '@/shared';

export const NewsContainer = () => {
    const page = useNewsStore((state) => state.page);
    const pages = useNewsStore((state) => state.pages);
    const news = useNewsStore((state) => state.news[page - 1]);
    const isFetching = useNewsStore((state) => state.isFetching);
    const changePage = useNewsStore((state) => state.changePage);

    return isFetching ? (
        <Preloader />
    ) : (
        news && (
            <>
                <div className={classes.container}>
                    {news.map((newsItem) => (
                        <NewsCard key={newsItem.id} news={newsItem} />
                    ))}
                </div>
                <Pagination
                    pages={pages}
                    currentPage={page}
                    changePage={changePage}
                />
            </>
        )
    );
};
