import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component  {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: 'Client-ID b205b07b2bc8eab3c685fb4beb577a2f9d7d81aee9f50635305d040123a6b708'
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length} images</span>
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }

}

export default App;