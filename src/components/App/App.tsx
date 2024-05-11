import { useEffect, useState } from "react";
import { fetchGalleryImages } from "../../servises/api";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

import { IImage, IImageModal } from "./App.types";

import css from "./App.module.css";

function App() {
  const [images, setImages] = useState<IImage[] | null>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [swnLoader, setSwnLoader] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<IImageModal | null>(null);

  useEffect(() => {
    const onSearchPhotos = async () => {
      if (!query) return;

      try {
        setSwnLoader(true);

        const data = await fetchGalleryImages(query, page);

        if (page === 1) {
          setImages(data.images);
          setTotalPages(data.total_pages);
        } else {
          setImages((prevImages: IImage[] | null) => [
            ...(prevImages || []),
            ...data.images,
          ]);
        }
      } catch {
        setIsError(true);
        toast("Oops, something is wrong!");
      } finally {
        setSwnLoader(false);
      }
    };

    onSearchPhotos();
  }, [query, page]);

  const onHandleSearch = (formData: string) => {
    setPage(1);
    setImages([]);
    setQuery(formData);
  };

  const onHandleClick = () => {
    setPage(page + 1);
  };

  const openModal = (images: IImage) => {
    setModalImage(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <SearchBar onHandleSearch={onHandleSearch} />
      {swnLoader && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} openModal={openModal} />}
      {totalPages > page && <LoadMoreBtn onHandleClick={onHandleClick} />}
      <ImageModal
        images={modalImage}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <Toaster />
    </div>
  );
}

export default App;
