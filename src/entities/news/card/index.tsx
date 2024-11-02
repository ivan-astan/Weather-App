import classes from './card.module.css';
import { formatDateTime } from '@/shared';
import { News } from '@/features/news';
import { FC, memo, useState } from 'react';
import { ModalNews } from '@/entities/news';

type Props = {
    news: News;
};
export const NewsCard: FC<Props> = memo(({ news }) => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <div
                className={classes.container}
                onDoubleClick={() => setModal(true)}
            >
                <h2>
                    {news.author}, {formatDateTime(news.publish_date)}
                </h2>
                <img src={news.image} alt={news.summary} />
                <h1>{news.title}</h1>
            </div>
            {modal && <ModalNews news={news} onClose={() => setModal(false)} />}
        </>
    );
});
