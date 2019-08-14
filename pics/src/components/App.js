import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };
    
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },    
            headers: {
                Authorization: 'Client-ID 4446ee75a5a0df8b2a078ee6f1739ba9ad329fddd180d010562d8a8decdbcc35'
            }
        });

        this.setState({ images: response.data.results });
    }
 
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found {this.state.images.length} images!
            </div>
        );
    }
}

export default App;