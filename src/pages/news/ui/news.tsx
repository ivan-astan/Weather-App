import { Header } from '@/widgets/header/ui';
import { Preloader } from '@/shared';
import { NewsInput } from '@/features/news';
import { NewsContainer } from '@/features/news';

export const News = () => {
    const isFetching = false;

    return (
        <>
            <Header
                description={'Your reliable source of current news!'}
                header={'news'}
            />
            {isFetching ? (
                <Preloader />
            ) : (
                <>
                    <NewsInput />
                    <NewsContainer />
                </>
            )}
        </>
    );
};
