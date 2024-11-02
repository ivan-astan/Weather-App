import { BASE_NEWS_URL } from '@/shared/constants';
export type News = {
    author: string;
    authors: string[];
    id: number;
    image: string;
    language: string;
    publish_date: string;
    sentiment: number;
    source_country: string;
    summary: string;
    text: string;
    title: string;
    url: string;
    video: string | null;
};
type NewsResponse = {
    available: number;
    news: News[];
    number: number;
    offset: number;
};
export const newsAPI = {
    getNews: async (topic: string) => {
        try {
            const response = await fetch(
                `${BASE_NEWS_URL}&text=${topic.trim()}`
            );

            return (await response.json()) as NewsResponse;
        } catch (error) {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
            throw error;
            return;
        }
    },
};
