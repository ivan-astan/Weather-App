import {create} from "zustand";
import {createJSONStorage, devtools, persist} from "zustand/middleware";

type DayStore = {
    day: number;
    time: number;
    changeTime: (time: number) => void;
    incrementDay: () => void;
    decrementDay: () => void;
}
export const useDayStore = create<DayStore>()(
    devtools(
        persist(
            (set) => ({
                day: 0,
                time: 0,
                changeTime: (time) => set({ time }),
                incrementDay: () => set(state => ({ day: state.day + 1 })),
                decrementDay: () => set(state => ({ day: state.day - 1 })),
            }),
            {
                name: 'day-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);