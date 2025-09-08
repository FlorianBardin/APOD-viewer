import React, { useEffect } from "react";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_APOD_API_KEY;
const API_BASE_URL = "https://api.nasa.gov/planetary/apod?api_key=";
const API_OPTION = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [picData, setPicData] = useState("");
  const [picDate, setPicDate] = useState("");
  const [picIsLoading, setPicIsLoading] = useState(false);
  const [picErrorMessage, setPicErrorMessage] = useState("");

  const fetchPictureData = async () => {
    setPicIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}${API_KEY}`;
      const response = await fetch(endpoint, API_OPTION);

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();

      if (data.Response === false) {
        setPicErrorMessage(data.Error || "Erreur de récupération des données.");
        return;
      }

      console.log(data);

      setPicData(data);
    } catch (error) {
      console.log(error);
      setPicErrorMessage(
        `Erreur de récupération des données de la photo. : ${error}`
      );
    } finally {
      setPicIsLoading(true);
    }
  };

  return (
    <main>
      <p>Hello world</p>
    </main>
  );
};

export default App;
