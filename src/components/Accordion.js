function Accordion({ items }) {
  console.log(items);

  const renderedItems = items.map(item => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
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