import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function DropdownPage() {

  const [selection, setSelection] = useState(null);

  const handleSelection = option => setSelection(option);

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];

  return <Dropdown options={options} value={selection} onChange={handleSelection} />;
}

export default DropdownPage;