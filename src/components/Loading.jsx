import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen justify-center items-center flex flex-row gap-1.5 z-0">
      <div className="w-2 h-2 rounded-full bg-foreground animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-foreground animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-2 h-2 rounded-full bg-foreground animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default Loading;
