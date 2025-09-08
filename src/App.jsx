import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import { PopoverCal } from "./components/PopoverCal";
import { BottomCalendar } from "./components/BottomCalendar";
import InfoDrawer from "./components/InfoDrawer";

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
  const [picDate, setPicDate] = useState(new Date());
  const [picIsLoading, setPicIsLoading] = useState(false);
  const [picErrorMessage, setPicErrorMessage] = useState("");

  const fetchPictureData = async (date) => {
    setPicIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}${API_KEY}&date=${date
        .toJSON()
        .slice(0, 10)}`;
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
      setPicIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPictureData(picDate);
  }, [picDate]);

  return (
    <main className="bg-background">
      {picIsLoading ? (
        <Spinner />
      ) : picErrorMessage ? (
        <p>{picErrorMessage}</p>
      ) : (
        <div
          className="absolute w-full h-screen bg-cover bg-center z-0 bg-primary"
          style={{
            backgroundImage: `url(${picData.hdurl})`,
          }}
        ></div>
      )}
      <div className="relative w-full h-screen z-10 flex flex-col justify-end items-center gap-3.5 pb-10">
        <PopoverCal date={picDate} setDate={setPicDate} />
        <InfoDrawer title={picData.title} desc={picData.explanation} />
      </div>
    </main>
  );
};

export default App;
