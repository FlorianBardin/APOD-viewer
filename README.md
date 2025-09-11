# 🌌 APOD Viewer

**APOD Viewer** is a web application that lets you explore the daily astronomy pictures published by NASA through the [Astronomy Picture of the Day (APOD)](https://api.nasa.gov/) API.  
It provides a modern, simple, and interactive interface built with **React.js**, **TailwindCSS**, **Shadcn/ui**, and the **APOD API**.

>[!NOTE]
>You can access it now [here](https://apod-viewer-iota.vercel.app/)!

## ⚙️ Features

### User Interface

- **Interactive calendar**: only allows selection of dates when an image is available.
- **"Open Calendar" button**: toggles the calendar view.
- **Information panel**: displays the image title and description.
- **Smooth user experience**: minimalist, responsive design suitable for any device.

### Technical

- `fetchPictureData(date)` : function to fetch image data for a specific date.
- `useDebounce` Hook : reduces unnecessary API calls when changing dates quickly or spamming inputs.

## 🛠️ Installation & Usage

### Requirements

- [Node.js & npm](https://nodejs.org/)
- **APOD API key** from [api.nasa.gov](https://api.nasa.gov/)

### Installation

```bash
# Clone the repository

git clone https://github.com/FlorianBardin/APOD-viewer.git

# Navigate into the project

cd APOD-viewer

# Install dependencies

npm install
```

### Configuration

Create a **`.env.local`** file at the root of the project and add your API key:

```bash
VITE_APOD_API_KEY=YOUR_API_KEY
```

### Start the development server

```bash
npm run dev
```

The app will be available at:  
🔗 [http://localhost:5173](http://localhost:5173)

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and share it.
