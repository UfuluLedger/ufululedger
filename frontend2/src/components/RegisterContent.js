import React, { useState } from "react";
import api from "../services/api";

function RegisterContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentHash, setContentHash] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/content/register", { title, description, contentHash });
      alert("Content registered successfully");
    } catch (error) {
      alert("Error registering content");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={contentHash}
        onChange={(e) => setContentHash(e.target.value)}
        placeholder="Content Hash"
        required
      />
      <button type="submit">Register Content</button>
    </form>
  );
}

export default RegisterContent;
