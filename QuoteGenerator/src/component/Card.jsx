import { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [quote, setQuote] = useState("");
  const [count, setCount] = useState(0);

//   const getQuote = () => {
    useEffect(() => {
        axios
          .get("https://api.api-ninjas.com/v1/quotes?category=funny", {
            headers: {
              "X-Api-Key": "j8iFgQ3yXbIhK5qU7//jug==owNythKPjibQ9ryF",
            },
          })
          .then((res) => {
            console.log(res);
            setQuote(res.data[0].quote);
          })
          .catch((res) => console.log("Failed"));

    }, [count])
//   };

  return (
    <div>
      {/* {getQuote} */}
      <button onClick={() => setCount(count+1)}>Click me</button>
      <p>{quote}</p>
    </div>
  );
};

export default Card;
