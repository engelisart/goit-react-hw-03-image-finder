import React from 'react';
import { SearchBar } from '../components/Searchbar/Searchbar';
import ButtonLoadMore from '../components/Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImg } from './api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    hits: [],
    total: 0,
    totalHits: 0,
    searchQuery: '',
    per_page: 12,
    page: 1,
    loading: false,
    activeImage: null,
  };

  async componentDidMount() {
    const data = await fetchImg();
    this.setState(prevState => ({
      hits: data.hits,
      total: data.total,
      totalHits: data.totalHits,
    }));
  }

  showLoadMore = () => {
    // let maxPage = Math.ceil(this.state.total / this.state.per_page);
    // if (this.state.page < maxPage) {
    //   return true;
    // }
    // return false;

    return this.state.page < Math.ceil(this.state.total / this.state.per_page)
      ? true
      : false;
  };

  setActiveImage = (image = null) => {
    this.setState({ activeImage: image });
  };

  handleLoadMore = async () => {
    await this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));

    try {
      const data = await fetchImg({
        q: this.state.searchQuery,
        page: this.state.page,
      });

      this.setState(prevState => ({
        hits: [...prevState.hits, ...data.hits],
        total: data.total,
        totalHits: data.totalHits,
      }));
      this.setState({ loading: false });
    } catch (error) {
      console.log('Error fetching data', error);
    }

    console.log(this.showLoadMore());
  };

  handleSearchSubmit = async query => {
    this.setState({ searchQuery: query, page: 1, hits: [], loading: true });

    try {
      const data = await fetchImg({ q: query });
      this.setState({
        hits: data.hits,
        total: data.total,
        totalHits: data.totalHits,
      });
      this.setState({ loading: false });
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          setActiveImage={this.setActiveImage}
          images={this.state.hits}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <>
            {this.showLoadMore() && (
              <ButtonLoadMore handleLoadMore={this.handleLoadMore} />
            )}
          </>
        )}
        {this.state.activeImage && (
          <Modal
            image={this.state.activeImage}
            setActiveImage={this.setActiveImage}
          />
        )}
      </>
    );
  }
}
