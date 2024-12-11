type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
const List = <T extends string | number | { id: number; name: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {typeof item === 'object' ? item.name : item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
