import { useEffect, useState } from "react";
import { fetchGalleryImages } from "./servises/api";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import css from "./App.module.css";

function App() {
  const [images, setImages] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [swnLoader, setSwnLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const onSearchPhotos = async () => {
      if (!query) return;

      try {
        setSwnLoader(true);

        const data = await fetchGalleryImages(query, page);

        if (page === 1) {
          setImages(data.results);
          setTotalPages(data.total_pages);
        } else {
          setImages((prevImages) => [...prevImages, ...data.results]);
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

  const onHandleSearch = (formData) => {
    setPage(1);
    setImages([]);
    setQuery(formData);
  };

  const onHandleClick = () => {
    setPage(page + 1);
  };

  const openModal = (images) => {
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
