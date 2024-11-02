import { FC, memo } from 'react';
import classes from './preloader.module.css';
import { ArrowBackwards, ArrowForward } from '@/shared';

type Props = {
    pages: number;
    currentPage: number;
    changePage: (page: number) => void;
};

export const Pagination: FC<Props> = memo(
    ({ pages, currentPage, changePage }) => {
        const pagination = [];
        for (let i = 1; i <= pages; i++) {
            pagination.push(i);
        }
        return (
            <div className={classes.paginationContainer}>
                <ArrowBackwards
                    onClick={() => {
                        if (currentPage > 0) {
                            changePage(currentPage - 1);
                        }
                    }}
                />

                <div className={classes.pagination}>
                    {pagination.map((num) => (
                        <span
                            key={num}
                            className={
                                num === currentPage ? classes.active : ''
                            }
                            onClick={() => changePage(num)}
                        >
                            {num}
                        </span>
                    ))}
                </div>

                <ArrowForward
                    onClick={() => {
                        if (currentPage <= pages) {
                            changePage(currentPage + 1);
                        }
                    }}
                />
            </div>
        );
    }
);
