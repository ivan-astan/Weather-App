import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { News, newsAPI } from '@/features/news/api/news';
import { splitArrayIntoChunks } from '@/shared';

type NewsStore = {
    topic: string;
    setTopic: (topic: string) => void;
    getNews: (topic: string) => void;
    news: News[][];
    isFetching: boolean;
    page: number;
    pages: number;
    changePage: (page: number) => void;
};

export const useNewsStore = create<NewsStore>()(
    devtools(
        persist(
            (set) => ({
                topic: '',
                news: [],
                page: 1,
                isFetching: false,
                pages: 0,
                setTopic: (topic: string) => {
                    set(() => ({ topic, isFetching: true }));
                    useNewsStore.getState().getNews(topic);
                },
                changePage: (page: number) => set(() => ({ page })),
                getNews: async (topic: string) => {
                    try {
                        const response = await newsAPI.getNews(topic);
                        set(() => ({
                            news: splitArrayIntoChunks(response?.news, 8),
                            pages: Math.ceil((response?.news.length || 0) / 8),
                            page: 1,
                        }));
                    } finally {
                        set(() => ({ isFetching: false }));
                    }
                },
            }),
            {
                name: 'news-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);
