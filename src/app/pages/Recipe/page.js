"use client";
import React, { useEffect, useRef, useState } from "react";
import RecipeCard from "@/app/components/RecipeCard"; // Import RecipeCard

function App() {
  const [videoIds, setVideoIds] = useState("");
  const [recipeData, setRecipeData] = useState(null);
  const [recipeText, setRecipeText] = useState("");
  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState();
  const [translatedText, setTranslatedText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("ur");

  const handleTranslateClick = () => {
    setTranslatedText(`Translation for ${selectedLanguage}: ${recipeText}`);
  };

  const handleInputChange = (event) => {
    setRecipeText(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const convertTextToSpeech = () => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: "Salli",
      },
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          setAudioFile(data);
        }
      }
    );
  };

  const eventSourceRef = useRef(null);

  useEffect(() => {
    closeEventStream(); // Close any existing connection
  }, []);

  useEffect(() => {
    if (recipeData) {
      closeEventStream(); // Close any existing connection
      initializeEventStream(); // Open a new connection
    }
  }, [recipeData]);

  const initializeEventStream = () => {
    const recipeInputs = { ...recipeData };
    const queryParams = new URLSearchParams(recipeInputs).toString();
    const url = `/api/recipeGenerator?${queryParams}`;
    eventSourceRef.current = new EventSource(url);

    eventSourceRef.current.onmessage = async (event) => {
      const data = await JSON.parse(event.data);
      if (data.action === "close") {
        closeEventStream();
      } else if (data.action === "chunk") {
        setRecipeText((prev) => prev + data.chunk);
      } else if (data.action === "complete") {
        const { videoIds } = await data;
        setVideoIds(videoIds);
      }
    };
console.log(videoIds);
    eventSourceRef.current.onerror = () => {
      eventSourceRef.current.close();
    };
  };

  const closeEventStream = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  async function onSubmit(data) {
    setRecipeText("");
    setRecipeData(data);
  }

  return (
    <>
      <div>
        <div className="App">
          <div className="flex flex-row h-full my-4 gap-2 justify-center">
            <RecipeCard onSubmit={onSubmit} />
            <div className="book-text-box w-[400px] h-[565px] text-xs text-gray-600 p-4 shadow-xl whitespace-pre-line overflow-y-auto">
              <div className="book-inner" style={{ marginRight: "200px", marginTop: "100px" }}>
                <div className="recipe-text">{recipeText}</div>
              </div>
            </div>
          </div>
        </div>
        {videoIds.length > 0 ? (
          videoIds.map((id) => (
            <div key={id} className="video-container">
              <iframe
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                allowFullScreen
                title={`YouTube Video ${id}`}
              ></iframe>
            </div>
          ))
        ) : (
          <p>No video IDs available</p>
        )}
      </div>
    </>
  );
}

export default App;
