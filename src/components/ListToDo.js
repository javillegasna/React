import ItemToDo from "./ItemToDo";

function ListToDo({ inProgressList, setInProgressList }) {

  const renderList = (list) =>
    list.map((item, indx) => (
      <ItemToDo
        key={`Activity${indx}`}
        name={`Activity${indx}`}
        description={item}
      />
    ));

  const rmActivity = (item) => inProgressList.filter((inProgressItem) => inProgressItem !== item);

  const deleteHandler = (e) => {
    const { value, name } = e.target;
    setInProgressList(value === "-" ? rmActivity(name) : inProgressList);
  };

  return (
    <ul onClick={deleteHandler}>
      {renderList(inProgressList)} 
    </ul>
  );
}

export default ListToDo;
