import React, { useState } from "react";
import api from "../services/api";

function TransferOwnership() {
  const [contentHash, setContentHash] = useState("");
  const [newOwner, setNewOwner] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/content/transfer", { contentHash, newOwner });
      alert("Ownership transferred successfully");
    } catch (error) {
      alert("Error transferring ownership");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={contentHash}
        onChange={(e) => setContentHash(e.target.value)}
        placeholder="Content Hash"
        required
      />
      <input
        type="text"
        value={newOwner}
        onChange={(e) => setNewOwner(e.target.value)}
        placeholder="New Owner Address"
        required
      />
      <button type="submit">Transfer Ownership</button>
    </form>
  );
}

export default TransferOwnership;
