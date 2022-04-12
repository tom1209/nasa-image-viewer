import "./ImageCard.component.css";

const ImageCard = ({image}) => {
  const {title, href, description} = image;
  console.log(href);
  return (
    <div className="imageCardContainer">
      <div className="imgContainer">
        <img src={href} alt={title} />
      </div>
      <div className="titleContainer">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ImageCard;