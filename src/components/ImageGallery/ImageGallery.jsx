import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'



const ImageGallery = ({photos, onClick, }) => {
   
    return (
    <ul className={css.ImageGallery}>
        {photos.map(photos => (
             <ImageGalleryItem key={photos.id} photos={photos} onClick={onClick} />
          ))}
       
    </ul>
    )
}

export default ImageGallery;