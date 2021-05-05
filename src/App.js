
import './App.css';
import React, { useState } from 'react';

const initiState = [1, 2, 3, 4, 5, 6, 7, 8];
function App() {

  const [list, setList] = useState(initiState);
  const [dragItem, setdragItem] = useState(null);

  function onDraghandler(e, index) {
    setdragItem(list[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }

  function onDragOverHandler(index) {
    const draggedItem = list[index];

    if (draggedItem === dragItem) {
      return;
    }

    const items = list.filter(item => item !== dragItem)
    items.splice(index, 0, dragItem)
    setList(items);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2>dragable List</h2>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} onDragOver={() => onDragOverHandler(index)} className="list-style">
                  <div draggable onDragStart={(e) => onDraghandler(e, index)}>{item}</div>
                </li>
              )
            }
            )
          }

        </ul>
      </div>
    </div>
  );
}

export default App;
