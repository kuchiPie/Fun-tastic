import React, { useState } from "react";
import axios from "axios"
const ChatApp = () => {
  const [query, setQuery] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      url: "https://you-chat-gpt.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "c1d849bec2msh8bca9c0f7683e31p18dfd7jsnf5f8db2c5ad3",
        "X-RapidAPI-Host": "you-chat-gpt.p.rapidapi.com",
      },
      data: '{"question":"Write python code to make inferences on a CNN model","max_response_time":30}',
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <div className="w-full px-20 border justify-center items-center flex">
        <section className="msger">
          <header className="msger-header">
            <div className="msger-header-title">
              <i className="fas fa-comment-alt"></i> Student Advisor
            </div>
            <div className="msger-header-options">
              <span>
                <i className="fas fa-cog"></i>
              </span>
            </div>
          </header>

          <main className="msger-chat">
            <div className="msg left-msg">
              <div
                className="msg-img"
                style={{
                  backgroundImage:
                    "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
                }}
              ></div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Sir</div>
                  <div className="msg-info-time">12:45</div>
                </div>

                <div className="msg-text">
                  Hi, welcome to Student Advisor! Go ahead and send me a message. 😄
                </div>
              </div>
            </div>

            <div className="msg right-msg">
              <div
                className="msg-img"
                style={{
                  backgroundImage:
                    "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
                }}
              ></div>

              <div className="msg-bubble">
                <div className="msg-info">
                  <div className="msg-info-name">Sajad</div>
                  <div className="msg-info-time">12:46</div>
                </div>

                <div className="msg-text">
                  You can change your name in JS section!
                </div>
              </div>
            </div>
          </main>

          <form className="msger-inputarea">
            <input
              type="text"
              className="msger-input"
              placeholder="Enter your message..."
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleClick}
              className="msger-send-btn"
            >
              Send
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ChatApp;
