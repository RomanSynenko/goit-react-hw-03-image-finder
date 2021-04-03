import React, { Component } from "react";

import SearchBar from "./SearchBar";
import ImageGallery from './ImageGallery';
import fetchApi from '../Servises';
import LoadButton from "./LoadButtom/LoadButton";
import Loader from "./Loader";
import ModalWindow from './ModalWindow';

class App extends Component {
  state = {
    img: [],
    search: '',
    page: 1,
    isLoader: false,
    error: null,
    showButtonLoader: false,
    showModal: false,
    largeImg: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.searchImages();
    }
  };

  searchImages = () => {
    const { search, page, img } = this.state;
    const option = { page, search };
    this.setState({ isLoader: true });
    fetchApi.fetchImage(option)
      .then(response => {
        this.setState((prevState) => ({
          img: [...prevState.img, ...response],
          page: prevState.page + 1
        }))
        if (img.length < 12) {
          this.setState({ showBtn: false });
        }
        this.windowsScroll();
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({
          isLoader: false,
          showButtonLoader: true
        })
      });

  };
  onSearchChange = (quary) => {
    this.setState({
      search: quary,
      page: 1,
      img: [],
      error: null,
    })
  };
  windowsScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  toggleModal = async (e) => {
    await this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));

    if (this.state.showModal) {
      const { src } = e.target.dataset;
      this.setState({ largeImg: src });
    }
  };
  render() {
    const {
      isLoader,
      showButtonLoader,
      error,
      showModal,
      largeImg } = this.state;
    return (
      <>
        <SearchBar onSubmitForm={this.onSearchChange} />
        {error && <h1>Image don't search</h1>}
        <ImageGallery images={this.state.img} onOpenModal={this.toggleModal} />
        {isLoader && <Loader />}
        {showButtonLoader && <LoadButton loadMore={this.searchImages} />}
        {showModal && <ModalWindow onCloseModal={this.toggleModal} largeImg={largeImg} />}
      </>
    )
  };
};
export default App;
