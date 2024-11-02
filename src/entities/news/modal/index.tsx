import classes from './modal.module.css';
import { News } from '@/features/news';
import { FC, memo } from 'react';
import { formatDateTime } from '@/shared';
type Props = {
    news: News;
    onClose: () => void;
};
export const ModalNews: FC<Props> = memo(({ news, onClose }) => {
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={classes.modalOverlay} onClick={onClose}>
            <div className={classes.modal} onClick={handleModalClick}>
                <div className={classes.container}>
                    <h2 className={classes.info}>
                        {news.author}, {formatDateTime(news.publish_date)}
                    </h2>
                    <img
                        className={classes.img}
                        src={news.image}
                        alt={news.summary}
                    />
                    <h1 className={classes.title}>{news.title}</h1>
                    <div className={classes.textContainer}>
                        <h3>
                            {news.summary}{' '}
                            <a style={{ color: 'white' }} href={news.url}>
                                Read more...
                            </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
});
