import { useState } from 'react';
import Table from './Table';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = label => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  }

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        header: () => (
          <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
  });

  // Only sort data if sortOrder && sortBy are not null.
  // Make a copy of the 'data' prop.
  // Find the correct sortValue function and use it for sorting.
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function icons(position) {
  switch (position) {
    case 'both':
      return (
        <div>
          <GoTriangleUp />
          <GoTriangleDown />
        </div>
      );
    case 'up':
      return (
        <div>
          <GoTriangleUp />
        </div>
      );
    case 'down':
      return (
        <div>
          <GoTriangleDown />
        </div>
      );
    default:
      return (<div></div>);
  }
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return icons('both');
  }

  if (sortOrder === null) {
    return icons('both');
  } else if (sortOrder === 'asc') {
    return icons('up');
  } else if (sortOrder === 'desc') {
    return icons('down');
  }
}

export default SortableTable;