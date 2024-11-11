import react from "react";
import GalleryCard from "@/app/components/GalleryCard";
import SearchBar from "@/app/components/SearchBar";

const app = () => {

    return (
        <>
            <div>
                <SearchBar />
            </div>

            <div>
                <GalleryCard />
            </div>
        </>
    )
}
export default app;
