import { useState, useEffect } from "react";

const GoodMessages = () => {
  const [goodMessages, setGoodMessages] = useState("");
  useEffect(() => {
    fetch("https://good-message-backend.web.app/goodMessages")
      .then((response) => response.json())
      .then((data) => setGoodMessages(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Leave A Positive Message 🌞</h1>
      {!goodMessages ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h2>Good Messages</h2>
          {goodMessages.map((goodMessage) => {
            return (
              <p key={goodMessage.id}>
                 {goodMessage.message}
              </p>
            );
          })}
        </>
      )}
    </>
  );
};

export default GoodMessages;
