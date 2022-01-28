const Card = ({ cardData }) => {
  const keys = Object.keys(cardData);

  const renderData = keys.map((key, index) =>
    key === "name" || key === "title" ? (
      <h1 key={`name${index}`}>{cardData[key]}</h1>
    ) : (
      <p key={`property${index}`}>
        {key}: {cardData[key]}
      </p>
    )
  );

  return <div>{renderData}</div>;
};

export default Card;
