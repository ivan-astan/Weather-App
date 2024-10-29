import {create} from 'zustand';
import {devtools, persist, createJSONStorage } from 'zustand/middleware';
import {geocodingAPI} from "@/features/weather/api/geocoding";
import {capitalize} from "@/shared/utils";
import {weatherAPI} from "@/features/weather/api/weather";

export type TemperatureType = 'C' | 'F';
type TemperatureStore = {
    temperature: TemperatureType,
    weather: Weather[]
    changeTemperature: (temperature: TemperatureType) => void;
    setWeather: (lat: number, lon: number) => void;
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
type LocationStore = {
    location: string,
    lat: number,
    lon: number,
    changeLocation: (location: string) => void
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

export const useWeatherStore = create<LocationStore & TemperatureStore>()(devtools(persist((set) => ({
        location: '',
        temperature: 'C',
        lat: 0,
        lon: 0,
    weather: [],
    changeLocation: async(location: string) => {
        const response: ResponseType = await geocodingAPI.getCoords(capitalize(location))
        const data  = response[0]
        const { setWeather } = useWeatherStore.getState();
        await setWeather(data.lat, data.lon);
        set(state => ({...state, location: data.name,lat: data.lat, lon: data.lon }))
    },
        changeTemperature: (temperature: TemperatureType) =>
            set((state) => ({ ...state, temperature })),
        setWeather: async(lat:number, lon:number) =>{
            const response = await weatherAPI.getWeather(lat, lon)
            set((state) => ({...state, weather: response.list}))
        }
}),

    {
        name: 'weather-storage',
        storage: createJSONStorage(() => sessionStorage)
    })))
