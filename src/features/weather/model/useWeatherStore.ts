import {create} from 'zustand';
import {devtools, persist, createJSONStorage } from 'zustand/middleware';
import {geocodingAPI} from "@/features/weather/api/geocoding";
import {capitalize} from "@/shared/utils";
import {weatherAPI} from "@/features/weather/api/weather";

export type TemperatureType = 'C' | 'F';
type WeatherStore = {
    temperatureUnit: TemperatureType,
    weather: Weather[]
    changeTemperature: (temperature: TemperatureType) => void;
    setWeather: (lat: number, lon: number) => void;
    location: string,
    lat: number,
    lon: number,
    changeLocation: (location: string) => void,
    isFetching: boolean
};
export type Weather = {
    clouds: {
        all: number
    },
    dt: number,
    dt_txt: string,
    main: {
        feels_like: number,
        grnd_level: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_kf: number,
        temp_max: number,
        temp_min: number,
    },
    pop: number,
    sys: {
        pod: string
    },
    visibility: number
    weather: {id: number, description: string, icon: string, main: string}[]
    wind: {
        deg: number,
        gust: number,
        speed:number,

    }
}

type ResponseType = {
    [key: number]: {
        country: string,
        lat: number,
        local_names: {
            [key: string]: string
        },
        lon: number,
        name: string,
        state: string,
    }
}

export const useWeatherStore = create<WeatherStore>()(devtools(persist((set) => ({
        location: '',
        isFetching: false,
        temperatureUnit: 'C',
        lat: 0,
        lon: 0,
    weather: [],
    changeLocation: async(location: string) => {
        set(state => ({...state, isFetching: true}))
        try {
            const response: ResponseType = await geocodingAPI.getCoords(capitalize(location))
            const data  = response[0]
            const { setWeather } = useWeatherStore.getState();
            await setWeather(data.lat, data.lon);
            set(() => ({location: data.name,lat: data.lat, lon: data.lon }))
        }
        finally {
            set(() => ({isFetching: false}))
        }

    },
        changeTemperature: (temperatureUnit: TemperatureType) =>
            set(() => ({  temperatureUnit })),
        setWeather: async(lat:number, lon:number) =>{
            const response = await weatherAPI.getWeather(lat, lon)
            set(() => ({ weather: response.list}))
        }
}),

    {
        name: 'weather-storage',
        storage: createJSONStorage(() => sessionStorage)
    })))
