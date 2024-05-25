function Item(props){
    const {name, class, des} = props;
    return (
        <div>
<div class="card">
        <h4>{name}</h4>
        <p>{class}</p>
        <p>
          {description}
        </p>
        <img src={src} alt={alt} />
      </div>
        </div>
      
    );
}