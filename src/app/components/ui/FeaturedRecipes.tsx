"use client";  // This marks the component as a Client Component

import { useEffect, useState } from "react";

interface FeaturedRecipeProps {
  videoId: string;  
}

export default function FeaturedRecipe({ videoId }: FeaturedRecipeProps) {
  const [relatedVideos, setRelatedVideos] = useState<string[]>([]);  // Store the related video IDs
  const [loading, setLoading] = useState(false);  // Handle the loading state

  // Function to fetch related videos
  const fetchRelatedVideos = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/relatedVideos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoId }),  // Send the videoId to the backend API
      });
      
      const data = await response.json();  // Parse the API response
      if (data.success) {
        setRelatedVideos(data.videoIds);  // Save related video IDs
      } else {
        console.error("Error fetching related videos:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  
  useEffect(() => {
    if (videoId) fetchRelatedVideos();
  }, [videoId]);

  return (
    <div>
      <h2>Featured Recipe</h2>
      {loading && <p>Loading related videos...</p>}  {/* Show loading message */}
      {!loading && relatedVideos.length > 0 ? (  
        <ul>
          {relatedVideos.map((video) => (
            <li key={video}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video}`}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
      ) : (
        <p>No related videos found.</p>  // Show message if no related videos are found
      )}
    </div>
  );
}
