import React, { useState } from "react";
import "./style.css";
const Wordcount = () => {
  const [text, setText] = useState("");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div class="container">
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        placeholder="Enter Text here"
        onChange={handleTextChange}
        value={text}
        rows={5}
        cols={50}
        style={{
          border: "2px solid black",
          borderRadius: "5px",
        }}
      />
      <p class="counterline">Word Count: {wordCount}</p>
    </div>
  );
};

export default Wordcount;
