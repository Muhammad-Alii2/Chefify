"use client"; // This marks the component as a Client Component
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";

interface VideoDetail {
  id: string;
  title: string;
}

export default function FeaturedRecipe() {
  const [relatedVideos, setRelatedVideos] = useState<VideoDetail[]>([]); // Store video details
  const [loading, setLoading] = useState(false); // Handle the loading state

  // Function to fetch related videos
  const fetchRelatedVideos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/getSuggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json(); // Parse the API response
      console.log('API Response:', data); // Debug API response

      if (data.success && data.videoDetails) {
        setRelatedVideos(data.videoDetails); // Save related video details (ID and title)
      } else {
        console.error("Error fetching related videos:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRelatedVideos();
  }, []);

  const videoItems = relatedVideos.map((video) => ({
    videoUrl: `https://www.youtube.com/embed/${video.id}`, // Embed URL for the video
    title: video.title,
  }));
  
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl mx-auto text-center text-xl md:text-5xl font-bold ">
      <span style={{ fontFamily: "angrybird", color: "#fe9e0d" }}> Featured Recipes</span> 
</h2>
      {loading && <p>Loading related videos...</p>}
      {!loading && relatedVideos.length > 0 ? (
        <InfiniteMovingCards
          items={videoItems}
          direction="left" // Scroll direction
          speed="normal"   // Scroll speed
          pauseOnHover={true} // Pause scroll on hover
        />
      ) : (
        <p>No related videos found.</p>
      )}
    </div>
  );
}  