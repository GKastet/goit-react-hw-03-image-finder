import { Component } from 'react';
import Container from './Container';
import { requestImages } from '../Api/api';

export class App extends Component {
  // static page = 1;

  state = {
    pictureName: '',
    responcedImages: [],
    isLoading: false,
    error: null,
    page: 1,
    modal: { isOpen: false, modalData: null },
  };

  async componentDidUpdate(prevProps, prevState) {
    const { pictureName, page } = this.state;
    if (
      this.state.pictureName !== prevState.pictureName ||
      this.state.page !== prevState.page
    ) {
      console.log('didupdate');
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
    // this.setState((prevState) => ({ page: prevState.page + 1}))
    console.log(this.state.pictureName);
    // App.page += 1;
    // try {
    //   this.setState({ isLoading: true });
    //   const nextImages = await requestImages(this.state.pictureName, App.page);
    //   this.setState({
    //     responcedImages: [...this.state.responcedImages, ...nextImages.hits],
    //   });
    //   console.log(123);
    //   console.log(App.page);
    //   console.log(nextImages);
    // } catch (error) {
    //   this.setState({ error: error.message });
    // } finally {
    //   this.setState({ isLoading: false });
    // }

    // const additionalImages = await requestImages(pictureName, page)
    // console.log(additionalImages);
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
    // requestImages()
    //this.fetchLoadMore()
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
          //page = {App.page}
        />
      </>
    );
  }
}
