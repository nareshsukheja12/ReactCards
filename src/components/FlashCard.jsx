import { useState } from 'react';

const FlashCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen border-2 border-gray-300 rounded-lg margin cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-4xl font-bold">
        {isFlipped ? (
          "State in React is a built-in object that holds component data and can trigger re-renders when updated."
        ) : (
          "What is state in React?"
        )}
      </h1>
    </div>
  );
};

export default FlashCard;