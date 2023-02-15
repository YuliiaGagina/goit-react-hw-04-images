import css from './ImageGalleryItem.module.css'


const ImageGalleryItem = ({photos, onClick, }) =>{

    return (
        <>
         {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li  onClick={()=>onClick(largeImageURL)}  className={css.ImageGalleryItem} key={id}>
              <img src={webformatURL} width='300' height='300' alt={tags} />
            </li>
          ))}
          </>
    )
}



export default ImageGalleryItem