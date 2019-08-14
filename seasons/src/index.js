import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // Not required but also special
    // First function called when this class is used.
    // Good for initializing state
    constructor(props) {
        super(props);
        // ONLY time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };
        
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // setState NEEDED to change state
                this.setState({ lat: position.coords.latitude })
            },
            err => {
                this.setState({ errorMessage: err.message})
            }
        );
    }
    
    // React says we HAVE TO define render!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latiude: {this.state.lat} </div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)