import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import { PopoverCal } from "./components/PopoverCal";
import LeftDrawer from "./components/LeftDrawer";

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
    setPicErrorMessage("");
    try {
      const convertedDate = new Intl.DateTimeFormat("fr-CA").format(date);
      const endpoint = `${API_BASE_URL}${API_KEY}&date=${convertedDate}`;
      const response = await fetch(endpoint, API_OPTION);

      if (!response.ok) {
        throw new Error("Network error");
      }

      const data = await response.json();

      if (data.Response === false) {
        setPicErrorMessage(data.Error || "Erreur de récupération des données.");
        return;
      }

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
        <Loading />
      ) : picErrorMessage ? (
        <p className="absolute w-full h-screen flex justify-center items-center text-red-400">
          {picErrorMessage}
        </p>
      ) : picData.hdurl ? (
        <div
          className="absolute w-full h-screen bg-cover bg-center z-0 bg-primary"
          style={{
            backgroundImage: `url(${picData.hdurl})`,
          }}
        ></div>
      ) : (
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${picData.url})`,
          }}
        ></div>
      )}
      <div className="absolute w-full h-screen flex flex-col justify-end">
        <div className="absolute w-full h-screen flex-1 flex">
          <LeftDrawer title={picData.title} desc={picData.explanation} />
        </div>
        <div className="absolute mb-10 flex self-center">
          <PopoverCal date={picDate} setDate={setPicDate} />
        </div>
      </div>
    </main>
  );
};

export default App;
