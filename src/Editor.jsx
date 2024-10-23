  import React from 'react';

const Editor = ({ file }) => {
  return (
    <div className="editor">
      <h2>{file?.name}</h2>
      <pre>{file?.content}</pre>
    </div>
  );
};

export default Editor;
