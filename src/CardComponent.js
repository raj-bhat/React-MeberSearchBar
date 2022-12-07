const CardComponent = (props) => {
   return (
    <div className="Card_container">
      <h1> {props.memberDetails.name}</h1>
      <h2>{props.memberDetails.Company}</h2>
    </div>
  );
};

export default CardComponent;
