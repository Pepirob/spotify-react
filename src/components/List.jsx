import Item from "./Item";
import "./List.css";

function List({ data }) {
  return (
    <main className="items">
      <ul className="list">
        {data.map((eachData) => {
          return (
            <li key={eachData.id}>
              <Item data={eachData} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default List;
