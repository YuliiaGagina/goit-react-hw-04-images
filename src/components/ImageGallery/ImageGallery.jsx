import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'



const ImageGallery = ({photos, onClick, }) => {
   
    return (
    <ul className={css.ImageGallery}>
        <ImageGalleryItem photos={photos} onClick={onClick} />
    </ul>
    )
}

export default ImageGallery;