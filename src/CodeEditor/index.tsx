import React from "react";
import styled from "styled-components";

interface Props {}

const CodeEditor: React.FC<Props> = (props) => {
  const refEditor = React.useRef(null);

  React.useEffect(() => {
    var editor: Document = refEditor.current?.contentWindow.document;
    editor.designMode = "on";
  }, []);

  const getEditor = (): Document => {
    return refEditor.current?.contentWindow.document;
  };

  return (
    <Box>
      <div className="tool-bar">
        <button
          onClick={() => {
            getEditor().execCommand("bold");
          }}
        >
          Bold
        </button>
        <button
          onClick={() => {
            getEditor().execCommand("superscript");
          }}
        >
          X<sup>2</sup>
        </button>
        <button
          onClick={() => {
            getEditor().execCommand("subscript");
          }}
        >
          X<sub>2</sub>
        </button>
        <input
          type="color"
          title="font color"
          onChange={(event) => {
            getEditor().execCommand("ForeColor", false, event.target.value);
          }}
        />
        <input
          type="color"
          title="highlight color"
          onChange={(event) => {
            getEditor().execCommand("BackColor", false, event.target.value);
          }}
        />
      </div>
      <iframe
        ref={refEditor}
        title="editor"
        frameBorder="none"
        name="editor"
        // ref={refContent}
        // style={{ minHeight: "100px" }}
      ></iframe>
    </Box>
  );
};

const Box = styled.div`
  width: 600px;
  height: 300px;
  overflow: hidden;
  padding: 8px;
  border: 1px solid red;
  box-sizing: border-box;
  iframe {
    width: 100%;
    height: 100%;
  }
  .tool-bar {
    display: flex;
  }
`;

export default CodeEditor;
