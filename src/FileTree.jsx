import React, { useState } from 'react';

const FileTree = ({ structure, onFileClick, indent = 0, selectedFile }) => {
  return (
    <ul>
      {structure.map(item => (
        <FileItem
          key={item.name}
          item={item}
          indent={indent}
          onFileClick={onFileClick}
          selectedFile={selectedFile}
        />
      ))}
    </ul>
  );
};

const FileItem = ({ item, indent, onFileClick, selectedFile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const isSelected = selectedFile && selectedFile.name === item.name;

  return (
    <li>
      <div
        onClick={item.type === 'folder' ? handleToggle : () => onFileClick(item)}
        className={`file-item ${item.type === 'folder' ? 'folder' : 'file'} ${isSelected ? 'selected' : ''}`}
        style={{ paddingLeft: `${indent * 20}px` }} 
      >
        {item.type === 'folder' ? (isOpen ? '📂' : '📁') : '📄'} {item.name}
      </div>
      {isOpen && item.type === 'folder' && item.children && (
        <FileTree
          structure={item.children}
          onFileClick={onFileClick}
          indent={indent + 1}
          selectedFile={selectedFile}
        />
      )}
    </li> 
  );
};

export default FileTree;
