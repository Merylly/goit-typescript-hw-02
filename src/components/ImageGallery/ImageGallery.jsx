import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <li className={css.galleryItem} key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
