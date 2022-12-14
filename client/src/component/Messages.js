import React from "react";
import styled from "styled-components";
import Message from "./Message";

const Messages = ({ data, deleteDiscussion, updateDiscussion }) => {
  return (
    <>
      <MsgBox>
        {data.map((item, idx) => (
          <Message
            item={item}
            key={item.id}
            deleteDiscussion={deleteDiscussion}
            updateDiscussion={updateDiscussion}
          />
        ))}
      </MsgBox>
    </>
  );
};

const MsgBox = styled.div`
  > div {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px;
    background-color: tomato;
    border-radius: 10px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`;

export default Messages;
