import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function UserContents() {
  const { owner } = useParams();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await api.get(`/content/user/${owner}`);
        setContents(response.data);
      } catch (error) {
        alert("Error fetching user contents");
      }
    };

    fetchContents();
  }, [owner]);

  return (
    <div>
      <h1>Contents owned by {owner}</h1>
      <ul>
        {contents.map((contentHash) => (
          <li key={contentHash}>{contentHash}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserContents;
