import React from 'react';
import Videos from "@/components/main/Videos";
import SearchVideos from "@/components/main/SearchVideos";

const Main = () => {
    return (
        <main>
            <SearchVideos/>
            <Videos/>
        </main>
    )
};

export default Main;