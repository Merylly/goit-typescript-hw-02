import { IImage } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: IImage[] | null;
  openModal: (image: IImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map((image: IImage) => {
          return (
            <li className={css.galleryItem} key={image.id}>
              <ImageCard
                urls={image.urls}
                alt_description={image.alt_description}
                onClick={() => openModal(image)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
