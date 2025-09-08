import React from "react";

const Loading = () => {
  return (
    <div class="flex flex-row gap-1.5">
      <div class="w-2 h-2 rounded-full bg-foreground animate-bounce"></div>
      <div class="w-2 h-2 rounded-full bg-foreground animate-bounce [animation-delay:-.3s]"></div>
      <div class="w-2 h-2 rounded-full bg-foreground animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default Loading;
