// App.jsx
import React, { useState } from "react";
import Input from "./Component/Input";
import Card from "./Component/Card";

function App() {
  const [cards, setCards] = useState([]);

  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
  ];

  const handleAddCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
  };

  const handleDeleteCard = (indexToRemove) => {
    setCards((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <>
      {/* HamroGram Header */}
      <h1 className="bg-slate-500 text-white text-center py-2 text-2xl font-bold">
        HamroGram
      </h1>

      {/* Main Content Area with Background */}
      <div className="min-h-screen w-full bg-emerald-600 flex p-10 gap-10">
        {/* Input Form */}
        <Input onAddCard={handleAddCard} />

        {/* Cards with Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-4 p-4 h-full max-w-full">
          {cards.map((card, index) => {
            const bgColor = colors[index % colors.length];
            return (
              <Card
                key={index}
                value={card}
                bgColor={bgColor}
                onDelete={() => handleDeleteCard(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
