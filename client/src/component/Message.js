import React, { useState } from "react";
import styled from "styled-components";
import trash from "../image/trashcan.png";
import modify from "../image/modify.png";
import checkbox from "../image/check.png";

const Message = ({ key, item, deleteDiscussion, updateDiscussion }) => {
  const [isClick, setIsclick] = useState(true);
  const [isModify, setIsModify] = useState(false);
  const [text, setText] = useState(item.content);
  const onClick = () => {
    setIsclick(!isClick);
  };

  const doModify = (e) => {
    e.preventDefault();
    setIsModify(!isModify);
    console.log("text", text);
    updateDiscussion({ text });
  };

  const onChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      {/* {isClick ? (
        <MsgClick onClick={onClick}>
          <div>
            <div>{item.title}</div>
            <div>
              <div>{item.name}</div>
              <div onClick={() => deleteDiscussion(item.id)}>
                <img width={30} src={trash} />
              </div>
              {isModify ? (
                <div onClick={doModify}>
                  <img width={30} src={checkbox} />
                </div>
              ) : (
                <div onClick={doModify}>
                  <img width={30} src={modify} />
                </div>
              )}
            </div>
          </div>
          <div>
            {isModify ? (
              <input onChange={onChange} type="text" required />
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        </MsgClick>
      ) : (
        <MsgClick onClick={onClick}>
          <div>
            <div>{item.title}</div>
            <div>
              <div>{item.name}</div>
              <div onClick={() => deleteDiscussion(item.id)}>
                <img width={30} src={trash} />
              </div>
              {isModify ? (
                <div onClick={doModify}>
                  <img width={30} src={checkbox} />
                </div>
              ) : (
                <div onClick={doModify}>
                  <img width={30} src={modify} />
                </div>
              )}
            </div>
          </div>
        </MsgClick>
      )} */}
      <MsgClick onClick={onClick}>
        <div>
          <div>{item.title}</div>
          <div>
            <div>{item.name}</div>
            <div onClick={() => deleteDiscussion(item.id)}>
              <img width={30} src={trash} />
            </div>
            {isModify ? (
              <div onClick={doModify}>
                <img width={30} src={checkbox} />
              </div>
            ) : (
              <div onClick={doModify}>
                <img width={30} src={modify} />
              </div>
            )}
          </div>
        </div>
        <div>
          {isModify ? (
            <input onChange={onChange} type="text" required />
          ) : (
            <span>{item.content}</span>
          )}
        </div>
      </MsgClick>
    </>
  );
};

const Msg = styled.div`
  color: white;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  div {
    margin: 10px;
  }

  > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    > div:nth-child(1) {
      margin: 10px;
    }
  }
  > div:nth-child(2) {
    display: flex;
  }
`;

const MsgClick = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:nth-child(1) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      margin: 10px;
    }
    > div:nth-child(2) {
      display: flex;
      justify-content: center;
    }
  }

  > div:nth-child(2) {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: cen;

    > span,
    button {
      margin: 10px;
    }
  }
`;
export default Message;
