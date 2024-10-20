const TemplateCard = (props) => {
    return (
      <div className="card">
        <u>
          <a href={props.document} className="card-title" download>
          {props.title}
          </a> 
        </u>
        {props.flag && <span className="badge">{props.flag}</span>} {/* Show flag if it exists */}
        <p className="keywords">{props.keyword}</p> {/* Display keywords */}
      </div>
    );
  };
  
  export default TemplateCard;
  