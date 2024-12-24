import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ContentDetails() {
  const { contentHash } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await api.get(`/content/${contentHash}`);
        setContent(response.data);
      } catch (error) {
        alert("Error fetching content details");
      }
    };

    fetchContent();
  }, [contentHash]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <p>Owner: {content.owner}</p>
      <p>Timestamp: {new Date(content.timestamp * 1000).toLocaleString()}</p>
    </div>
  );
}

export default ContentDetails;
