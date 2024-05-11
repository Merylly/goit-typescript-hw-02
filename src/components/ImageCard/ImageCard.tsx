import css from "./ImageCard.module.css";

interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
    thumb: string;
    small_s3: string;
    raw: string;
    full: string;
  };
  alt_description: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  onClick,
}) => {
  return (
    <div>
      <img
        className={css.image}
        src={urls.small}
        alt={alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
