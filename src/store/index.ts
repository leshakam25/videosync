import {create} from 'zustand'
import {getAllVideos, getVideosBySearch} from "@/services/getVideos";

type UseVideos = {
    videos: any[];
    loading: boolean;
    getAllVideos: () => Promise<void>;
    getVideosBySearch: (value: string) => Promise<void>;
}

export const UseVideos = create<UseVideos>()((set) => ({
    videos: [],
    loading: false,
    getAllVideos: async () => {
        set({loading: true})
        const videos = await getAllVideos()
        set({videos, loading: false})
    },
    getVideosBySearch: async (search) => {
        set({loading: true})
        const videos = await getVideosBySearch(search)
        set({videos, loading: false})
    }
}))