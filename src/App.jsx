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
  return (
    <main>
      <p>Hello world</p>
    </main>
  );
};

export default App;
