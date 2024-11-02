import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { News, newsAPI } from '@/features/news/api/news';

type NewsStore = {
    topic: string;
    setTopic: (topic: string) => void;
    getNews: (topic: string) => void;
    news: News[];
};

export const useNewsStore = create<NewsStore>()(
    devtools(
        persist(
            (set) => ({
                topic: '',
                news: [],
                setTopic: (topic: string) => {
                    set(() => ({ topic }));
                    useNewsStore.getState().getNews(topic);
                },
                getNews: async (topic: string) => {
                    const response = await newsAPI.getNews(topic);
                    set(() => ({ news: response?.news }));
                },
            }),
            {
                name: 'news-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);
