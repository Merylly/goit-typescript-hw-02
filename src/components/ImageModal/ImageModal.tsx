import Modal from "react-modal";

import css from "./ImageModal.module.css";
import { IImageModal } from "../App/App.types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  images: IImageModal | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  isOpen,
  onRequestClose,
}) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      {images && (
        <div className={css.modalWrapper}>
          <img
            className={css.modalImage}
            src={images.urls.regular}
            alt={images.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
