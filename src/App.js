import React, { useState } from "react";

import marked from "marked";

import Badge from "react-bootstrap/Badge";

const textBoxStyle = {
  width: "400px",
  height: "50vh",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px"
};

const previewStyle = {
  width: "400px",
  height: "50vh",
  backgroundColor: "#DCDCDC",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px"
};

function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = e => setMarkdown(e.target.value);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">
          <Badge variant="light">Markdown Previewer</Badge>
        </h1>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4 className="text-center">
              <Badge variant="light">Markdown Input</Badge>
            </h4>
            <div className="mark-input">
              <textarea
                className="input"
                style={textBoxStyle}
                value={markdown}
                onChange={handleChange}
              >
                {" "}
              </textarea>
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="text-center">
              <Badge variant="light">Preview</Badge>
            </h4>
            <div
              style={previewStyle}
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
