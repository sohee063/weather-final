import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const Notice = () => {
  const [data, setData] = useState([]);
  const domain = "http://localhost:6001";

  useEffect(() => {
    getApi();
  }, [data]);

  const getApi = async () => {
    let url = domain + `/blogs`;
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  };

  const addDiscussion = async ({ title, author, bodyText }) => {
    const newDiscussion = {
      id: "unique id",
      createdAt: new Date().toISOString(),
      title: title,
      author: author,
      content: bodyText
    };

    fetch(domain + "/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDiscussion)
    }).then((res) => {
      if (res.status === 201) {
        getApi();
      }
    });
  };

  const updateDiscussion = async (text, id) => {
    const newDiscussion = {
      id: id,
      createdAt: new Date().toISOString(),
      content: text
    };
    fetch(domain + `/blogs/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDiscussion)
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.status === 201) {
          getApi();
        }
      });
  };

  const deleteDiscussion = (id) => {
    fetch(domain + `/blogs/${id}`, {
      method: "DELETE"
    }).then((res) => {
      if (res.status === 202 || 204) {
        getApi();
      }
    });
  };

  return (
    <Board>
      <MessageInput addDiscussion={addDiscussion} />
      <Messages
        data={data}
        key={data.id}
        deleteDiscussion={deleteDiscussion}
        updateDiscussion={updateDiscussion}
      />
    </Board>
  );
};

const Board = styled.div`
  padding: 20px;
  width: 350px;
  margin-left: 50px;
  border-radius: 50px;
  background-color: #c9bbcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Notice;
