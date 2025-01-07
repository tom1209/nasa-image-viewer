import "./ImageCard.component.css";
import { Title } from "../Title/Title.component";

const ImageCard = ({image}) => {
  const {title, href, description} = image;
  return (
    <div className="imageCardContainer">
      <div className="imgContainer">
        <Title href={href} title={title} />
        <img src={href} alt={title} />
      </div>
      <div className="titleContainer">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ImageCard;