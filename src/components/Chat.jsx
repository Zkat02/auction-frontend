import React, { useState, useRef, useEffect } from "react";
import openai from "openai"; // импорт библиотеки OpenAI

openai.api_key = "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";

function Chat() {
  const [chat, setChat] = useState([]); // состояние чата
  const [input, setInput] = useState(""); // состояние ввода сообщения
  const messagesEndRef = useRef(null); // ссылка на конец списка сообщений

  // функция генерации ответа от модели
  async function generateResponse(prompt) {
    try {
      const response = await openai.Completion.create({
        engine: "davinci",
        prompt: prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      });
      const message = response.choices[0].text.trim();
      return message;
    } catch (error) {
      console.log(error);
    }
  }

  // функция отправки сообщения
  function sendMessage() {
    if (input !== "") {
      setChat((prevChat) => [
        ...prevChat,
        { author: "user", message: input },
      ]);
      generateResponse(input).then((response) => {
        setChat((prevChat) => [
          ...prevChat,
          { author: "chatbot", message: response },
        ]);
      });
      setInput("");
    }
  }

  // функция скролла списка сообщений вниз
  function scrollToBottom() {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  // функция скролла списка сообщений при изменении состояния чата
  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div className="chat">
    <div className="chat-container">
      <div className="chat-messages">
        {chat.map((message, index) => (
          <div
          key={index}
          className={message.author === "user" ? "user" : "bot"}>
          <div className="message-text">{message.message}</div>
        </div>
        
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage() : null
          }
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
    </div>
  );
}

export default Chat;