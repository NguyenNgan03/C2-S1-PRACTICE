export default function Cart(props) {
    const { name, title1, title2, image } = props;
    return (
      <div class="card">
        <h4>{name}</h4>     
        <small>{title1}</small>
        <p>
          {title2}
        </p>
        <img src={image.src} alt={image.alt} />
      </div>
    )
}