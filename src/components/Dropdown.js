import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionClick = option => {
    setIsOpen(false);
    onSelect(option);
  };

  let content = selection ? selection.value : 'Select...';

  console.log(options, selection, onSelect);

  const renderedOptions = options.map(option => {
    return <div onClick={() => handleOptionClick(option)} key={option.value} value={option.value}>{option.label}</div>
  });

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;