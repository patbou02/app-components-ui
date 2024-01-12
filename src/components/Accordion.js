import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = nextIndex => {
    console.log('STALE version of expandedIndex', expandedIndex);
    setExpandedIndex((currentExpandedIndex) => {
      console.log('UP TO DATE version', currentExpandedIndex);
      return (currentExpandedIndex === nextIndex) ? -1 : nextIndex;
    });
  };

  const renderedItems = items.map((item, i) => {

    const isExpanded = (i === expandedIndex);

    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer"
          onClick={() => handleClick(i)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">
      {renderedItems}
    </div>
  );
}

export default Accordion;