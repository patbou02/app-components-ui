function Table({ data, config }) {

  const renderedRows = data.map(fruit => {
    const renderedCells = config.map(cell => <td className="p-3" key={cell.label}>{cell.render(fruit)}</td>);

    return (
      <tr className="border-b" key={fruit.name}>
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map(column => <th key={column.label}>{column.label}</th>);

  return (
    <table className="table-auto border-spacing-2">
      <thead>
      <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;