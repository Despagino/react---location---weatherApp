import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import './styles.css';
import LoadingScreen from './LoadingScreen'


class App extends React.Component {
    // This is a way to initialize State
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        )
    } // used for data loading, componentDidMount is used along with the geolocation function 

    render() {     // React says we have to define render()!! 
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        else {
            return (
                <LoadingScreen />
            )
        }
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)