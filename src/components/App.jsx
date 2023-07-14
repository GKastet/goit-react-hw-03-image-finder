import { Component } from 'react';
import Container from './Container';
import { requestImages } from '../Api/api';

export class App extends Component {
  state = {
    pictureName: '',
    responcedImages: [],
    isLoading: false,
    error: null,
    page: 1,
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
        this.setState({
          responcedImages:
            page === 1
              ? responcedImages.hits
              : [...this.state.responcedImages, ...responcedImages.hits],
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  fetchLoadMore = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1}))    
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
      pictureName,
      responcedImages,
      isLoading,
      error,
      modal: { isOpen, modalData },
    } = this.state;
    return (
      <>
        <Container
          onSubmit={this.onSubmit}
          responcedImages={responcedImages}
          isLoading={isLoading}
          error={error}
          fetchLoadMore={this.fetchLoadMore}
          pictureName={pictureName}
          checkClick={this.checkClick}
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
          modalIsOpen={isOpen}
          modalData={modalData}          
        />
      </>
    );
  }
}
