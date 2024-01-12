import { useState } from 'react';

function Accordion({ items }) {
  console.log(items);

  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = nextIndex => setExpandedIndex(nextIndex);

  const renderedItems = items.map((item, i) => {

    const isExpanded = (i === expandedIndex);

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(i)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      <div>Accordion</div>
      {renderedItems}
    </div>
  );
}

export default Accordion;