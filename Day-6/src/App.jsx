import React, { useState } from "react";
import Card from "./Component/Card";

function App() {
  const [list, setList] = useState([
    {
      name: "Krishna Gurung",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_full/cg47pknak_Mountain_Gorilla_Silverback_WW22557.jpg",
    },
    {
      name: "Bishal Adhikari",
      image:
        "https://media.istockphoto.com/id/1368096050/photo/male-common-chimpanzee.jpg?s=1024x1024&w=is&k=20&c=mpX7jfV3X0D8oJ-z0Q8EFU1JZmzfrARn8Qt6dqt308Y=",
    },
    {
      name: "Suyan Thapa",
      image:
        "https://images.pexels.com/photos/1670413/pexels-photo-1670413.jpeg",
    },
  ]);

  const colors = [
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
  ];

  const handleDelete = (indexToRemove) => {
    setList((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <>
      <h1 className="bg-slate-500 text-white text-center py-2 text-2xl font-bold">
        HamroGram
      </h1>
      <div className="min-h-screen w-full bg-emerald-600 flex flex-col justify-center items-center py-6">
        <div className="flex flex-col gap-6 items-center">
          {list.map((value, index) => {
            const bgColor = colors[index % colors.length];
            return (
              <Card
                key={index}
                value={value}
                bgColor={bgColor}
                onDelete={() => handleDelete(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
