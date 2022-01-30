const Card = ({ cardData }) => {
  const keys = Object.keys(cardData);

  const renderData = () =>
    keys.map((key, index) =>
      key === "name" || key === "title" ? (
        <h1 className="card-header" key={`name${index}`}>
          {cardData[key]}
        </h1>
      ) : (
        <p className="input-group m-0" key={`property${index}`}>
          <span className="input-group-text" style={{ width: "150px" }}>
            {key}:
          </span>{" "}
          <span className="form-control">{cardData[key]}</span>
        </p>
      )
    );

  return <div className="container card p-0 mt-3">{renderData()}</div>;
};

export default Card;
