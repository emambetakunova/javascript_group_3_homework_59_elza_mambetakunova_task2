import React, {Component} from 'react';
import Jokes from '../../components/Jokes/Jokes'
import Button from "../../components/Button/Button";

class JokesBuild extends Component {
    state = {
        jokeText: ''
    };

    refreshJoke = () => {
        this.componentDidMount()
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
        console.log('update page')
        return (
            <div className="JokesWrap">
                <h2>Jokes about Chuck Norris</h2>
                <Jokes
                    value={this.state.jokeText}
                />
                <Button
                    onClick={() => this.refreshJoke()}
                />
            </div>

        );
    }
}

export default JokesBuild;