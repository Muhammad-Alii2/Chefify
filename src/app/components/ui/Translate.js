// Translate.js
import React, { useState, useEffect } from "react";
import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";

const Translate = ({ inputText, targetLanguage }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const translate = async () => {
      if (!inputText || !targetLanguage) return;

      const client = new TranslateClient({
        region: "reg", // Update with your AWS region
        credentials: {
          accessKeyId: "keyid",

          secretAccessKey: "seckey",
        },
      });

      const sourceLanguageCode = getLanguageCode("en"); // Assuming source language is always English

      const command = new TranslateTextCommand({
        Text: inputText,
        SourceLanguageCode: sourceLanguageCode,
        TargetLanguageCode: targetLanguage,
      });

      try {
        const response = await client.send(command);
        setTranslatedText(response.TranslatedText);
      } catch (error) {
        console.error(error);
      }
    };

    translate();
  }, [inputText, targetLanguage]);

  const getLanguageCode = (language) => {
    switch (language) {
      case "en":
        return "en";
      case "ur":
        return "ur";
      case "ar":
        return "ar";
      case "hi":
        return "hi";
      case "zh":
        return "zh";
      default:
        return null;
    }
  };

  return <p>{translatedText}</p>;
};

export default Translate;
