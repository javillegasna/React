const Card = ({ cardData }) => {
  const keys = Object.keys(cardData);

  const renderData = keys.map((key) =>
    key === "name" || key === "title"  ? (
      <h1>{cardData[key]}</h1>
    ) : (
      <p>
        {key}: {cardData[key]}
      </p>
    )
  );
  console.log(keys);

  return <div>{keys ? renderData : <h1>No Data</h1>}</div>;
};

export default Card;
