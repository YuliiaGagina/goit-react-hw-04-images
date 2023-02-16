import { useEffect, useState } from 'react';
import { requestPhotos } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import Modal from './Modal/Modal';

import Button from './Button/Button';

export function App( ) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1)
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [query, setQuery] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  
  useEffect(() => {
    if(!query){
      return;
    }
    const seachPhotos = async ( ) =>{
      setIsloading(true);
      try{
        const { totalHits, hits } = await requestPhotos(query, page);
        if (hits.length === 0) {
          setIsEmpty(true);
          return;
        }

        setPhotos(prevState => [...prevState, ...hits]);
        setShowLoadMore(page < Math.ceil(totalHits / 12))
      } catch(error){
        setError(error.message)

      }finally{
        setIsloading(false);
      }
    }
    seachPhotos();
  }, [query, page], );
 
  

  const onSubmit = query => {
    setQuery(query);
    setPhotos([]);
    setIsloading(false);
    setError('');
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
    
  };
 const handleLoadMore = () => {
    setPage(prevState => prevState + 1 );
  };

 const toogleModal = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
  }
 
 return (
      <div className={css.app}>
        {isLoading && <Loader />}
        <Searchbar onSubmit={onSubmit} />
        {isEmpty ? (<p>Фотографій на цей запит немає {error}</p>): <ImageGallery photos={photos} onClick={toogleModal}  />}
        
        {showLoadMore && <Button showMore={handleLoadMore} />  } 
        
       {largeImageURL && <Modal photos={largeImageURL} onClose={toogleModal} />}
      </div>
    );
  }

