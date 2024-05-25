import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";

export default function InfoCards({ confirmer }) {
  const [cardData, setCardData] = useState([]);

  async function getData() {
    try {
      const res = await axios.get("/api/v1/crp/getAllCollectedApplication");
      console.log(res);
      if (res.data.status == "success") {
        setCardData([...res.data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 bg-gray-300">
        {confirmer
          ? cardData.map((card, index) => (
              <Cards
                key={index}
                data={card.information}
                confirmer={confirmer}
              />
            ))
          : cardData.map((card, index) => (
              <Cards key={index} data={card.information} />
            ))}
      </div>
    </>
  );
}
