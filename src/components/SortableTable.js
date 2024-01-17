import Table from './Table';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import useSort from '../hooks/use-sort';

function SortableTable(props) {

  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort( data, config );

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    } else {
      return {
        ...column,
        header: () => (
          <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        ),
      };
    }
  });

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