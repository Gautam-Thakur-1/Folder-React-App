import React from "react";
import { useState } from "react";
import FileTree from "./FileTree";
import Editor from "./Editor";
import fileStructure from "./File_structure";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="app">
      <div className="file-tree">
        <FileTree
          structure={fileStructure}
          onFileClick={handleFileClick}
          selectedFile={selectedFile}
        />
      </div>
      <div className="file-editor">
        <h1 id="title">Recursive Folder Structure</h1>
        {selectedFile ? (
          <Editor file={selectedFile} />
        ) : (
          <p className="file-para">Select a file to view its content</p>
        )}  
      </div>
    </div>
  );
};

export default App;
