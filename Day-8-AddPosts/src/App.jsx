import React, { useState } from "react";
import Input from "./Component/Input";
import Card from "./Component/Card";
import Navbar from "./Component/Navbar";

function App() {
  const [cards, setCards] = useState([]);

  const handleAddCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  const handleDeleteCard = (indexToRemove) => {
    setCards((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 flex justify-center bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
        <div className="w-full max-w-md flex flex-col gap-8">
          <Input onAddCard={handleAddCard} />
          {cards.map((card, index) => (
            <Card
              key={index}
              value={card}
              bgColor="rounded-xl shadow-md bg-white dark:bg-gray-800"
              onDelete={() => handleDeleteCard(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
