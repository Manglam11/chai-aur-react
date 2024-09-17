import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-09-17/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response[currency]);
        console.log("Updated data:", response[currency]); // Log updated data here
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Error handling
      });
  }, [currency]);

  // Removed stale console.log
  return data;
}

export default useCurrencyInfo;
