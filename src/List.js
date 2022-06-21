const List = ({ list }) => {
  console.log(list);
  return (
    <div className="list-display">
      {list.map((item) => (
        <div className="single-list">
          <h3>{item.title}</h3>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
