export const SearchBar = (props) => {
  console.log(props);
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.search}
        onChange={props.change}
      ></input>
      <button onClick={props.filter} style={{ marginTop: "10px" }}>
        Filter
      </button>
    </div>
  );
};
