import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({photos, onClick,
}) => {
  return (
    <>
      <li 
        onClick={() => onClick(photos.largeImageURL)}
        className={css.ImageGalleryItem}
      >
        <img src={photos.webformatURL} width="300" height="300" alt={photos.tags} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
