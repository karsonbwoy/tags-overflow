import { create } from 'zustand';

type FilterStore = {
    isAscending: boolean,
    pageSize: string,
    page: number,
    setPageSize: (value: string) => void,
    changeSorting: (value: string) => void,
    setPage: (value: number) => void,
}

export const useFilterStore = create<FilterStore>((set) => ({
    isAscending: false,
    pageSize: '10',
    page: 1,
    setPageSize: (value) => {
        set({ pageSize: value });
    },
    changeSorting: (value) => {
        set({ isAscending: value === 'ascending' && true })
    },
    setPage: (value) => {
        set({ page: value })
    }
}))