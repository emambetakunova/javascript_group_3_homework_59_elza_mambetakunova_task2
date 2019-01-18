import React, {Component} from 'react';
import Jokes from '../../components/Jokes/Jokes'

class JokesBuild extends Component {
    state = {
        jokeText: ''
    };

    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        }).then(joke => {
            let jokes = joke.value

            this.setState({jokeText: jokes})

        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="JokesWrap">
                <h2>Jokes about Chuck Norris</h2>
                <Jokes
                    value={this.state.jokeText}
                />
            </div>
        );
    }
}

export default JokesBuild;