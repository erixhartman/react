import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '252314735580-9takqt94410iugkv769h1sag9lng22mg.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    
    render() {
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;