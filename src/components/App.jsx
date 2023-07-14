import { Component } from 'react';
import { requestImages } from '../Api/api';
import { ContainerStyled } from './ContainerStyled';
import SearchBar from './Searchbar/Searchbar';
import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    pictureName: '',
    responcedImages: [],
    isLoading: false,
    error: null,
    page: 1,
    totalPictures: null,
    modal: { isOpen: false, modalData: null },
  };

  async componentDidUpdate(_, prevState) {
    const { pictureName, page } = this.state;
    if (
      this.state.pictureName !== prevState.pictureName ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true });
        const responcedImages = await requestImages(pictureName, page);
        console.log(responcedImages);
        this.setState({
          totalPictures: responcedImages.totalHits,
          responcedImages:
            page === 1
              ? responcedImages.hits
              : [...prevState.responcedImages, ...responcedImages.hits],
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  fetchLoadMore = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onSubmit = pictureName => {
    this.setState({
      pictureName: pictureName,
      page: 1,
    });
  };

  onOpenModal = data =>
    this.setState({ modal: { isOpen: true, modalData: data } });

  onCloseModal = () =>
    this.setState({ modal: { isOpen: false, modalData: null } });

  render() {
    const {      
      responcedImages,
      isLoading,
      error,
      modal: { isOpen, modalData },
    } = this.state;
    return (
      <>
        <ContainerStyled>
          <SearchBar onSubmit={this.onSubmit} />
          {isLoading && <Loader />}
          {error && <>Oops... Error: {error}</>}
          {responcedImages?.length > 0 && (
            <ImageGallery
              responcedImages={responcedImages}
              onOpenModal={this.onOpenModal}
            />
          )}
         
          {responcedImages.length > 0 && responcedImages.length < this.state.totalPictures &&   (
            <Button fetchLoadMore={this.fetchLoadMore} />
          )}
          {isOpen && (
            <Modal onCloseModal={this.onCloseModal} modalData={modalData} />
          )}
        </ContainerStyled>        
      </>
    );
  }
}
