export const Item = (props) =>{
    const { src, name, classes, des } = props;
    return (
      <div>
        <div class="card">
          <img src={src}  />
          <h4>{name}</h4>
          <p>{classes}</p>
          <p>{des}</p>
        </div>
      </div>
    );
}