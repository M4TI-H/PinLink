import { useState } from "react";

const usePins = (currentPins) => {
  const [displayedPins, setDisplayedPins] = useState(currentPins);

  const createNewPin = (pinData, image) => {
    const index = Date.now().toString(); 
    const currentDate = new Date().toISOString().slice(0, 10);
    setDisplayedPins(prevPins => [...prevPins, {
        id: index,
        title: pinData.title,
        description: pinData.description,
        url: pinData.url,
        image: image ? image : "https://www.fivebranches.edu/wp-content/uploads/2021/08/default-image.jpg",
        date: currentDate
    }]);
  };

  const setPins = (pins) => {
    setDisplayedPins(pins);
  };

  return {displayedPins, setPins, createNewPin}
};

export default usePins;