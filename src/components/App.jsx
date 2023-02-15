import { Component } from 'react';
import { requestPhotos } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import Modal from './Modal/Modal';

import Button from './Button/Button';

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    error: '',
    page: 1,
    showLoadMore: false,
    query: '',
    selectedPostId: null,
    showModal: false,
    largeImageURL: '',
    pressedKey: null,
  };
 
  async componentDidUpdate(_, prevState) {
  
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
    try {
      const { totalHits, hits } = await requestPhotos(query, page);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...hits],
        showLoadMore: page < Math.ceil(totalHits / 12),
       
      }));
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
      
    }
  }
  }

  onSubmit = query => {
    this.setState({
      query,
      photos: [],
      isLoading: false,
      error: '',
      page: 1,
      showLoadMore: false,
    });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  // handleSelectPhoto = photoId => {
  //   this.setState((prevState) => ({
  //     selectedPostId: photoId,
  //   }));
   
  // };
  toogleModal = (largeImageURL) => {
    
    this.setState(state =>({
     largeImageURL
    }))
  }
 
 
 

  render() {

   
    const { photos, showLoadMore, isLoading, largeImageURL } = this.state;
  return (
      <div className={css.app}>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery photos={photos} onClick={this.toogleModal}  />
        {showLoadMore && <Button showMore={this.handleLoadMore} />  } 
        
       {largeImageURL && <Modal photos={largeImageURL} onClose={this.toogleModal} />}
      </div>
    );
  }
}
