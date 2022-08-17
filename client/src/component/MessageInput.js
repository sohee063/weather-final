import React from "react";
import styled from "styled-components";

const MessageInput = ({ addDiscussion }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const author = e.target[0].value;
    const title = e.target[1].value;
    const bodyText = e.target[2].value;
    addDiscussion({ author, title, bodyText });
    e.target.reset(); // submit 후 form 빈칸으로 리셋
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Tittle>🖐</Tittle>
        <InputBox>
          <div>
            <label for="name">이름</label>
            <input type="text" placeholder="name" />
          </div>
          <div>
            <label for="title">제목</label>
            <input type="text" placeholder="title" />
          </div>
          <div>
            <label for="content">내용</label>
            <textarea
              type="text"
              style={{ width: 183 }}
              placeholder="content"
            />
          </div>
          <div>
            <button>등록</button>
          </div>
        </InputBox>
      </form>
    </>
  );
};

const InputBox = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;

  position: relative;
  > div {
    margin-left: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
  }
  > div:nth-child(4) {
    button {
      align-items: center;
      background-color: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 0.25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      display: inline-flex;
      font-family: system-ui, -apple-system, system-ui, "Helvetica Neue",
        Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      line-height: 0.5;
      margin: 0;
      min-height: 1rem;
      padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
      position: relative;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      width: auto;
    }

    button:hover,
    button:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:active {
      background-color: #f0f0f1;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
  }
`;

const Tittle = styled.div`
  font-size: 25px;
  color: beige;
  margin: 20px;
  text-align: center;
`;

export default MessageInput;
