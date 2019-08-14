import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // Not required but also special
    // First function called when this class is used.
    // Good for initializing state
    constructor(props) {
        super(props);

        this.state = { lat: null };
    }
    
    // React says we HAVE TO define render!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err),
        );

        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)