import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            score: 0
        };
    }

    render() {
        return (
            <div>
                <button onClick={this.generateScore}>Random Score</button>{this.state.score}<br></br>
                <button>Logout</button>
            </div>
        );
    }

    generateScore = () => {
        const p = Math.random();
        let score = 0;
        if (p < 0.6) {
            score = Math.round(Math.random() * 3999);
        } else if (p < 0.9) {
            score = Math.round(Math.random() * 4000) + 4999;
        } else if (p < 0.98) {
            score = Math.round(Math.random() * 499) + 9000;
        } else {
            score = Math.round(Math.random() * 499) + 9500;
        }
        this.setState({
            score
        });
    }
}

export default Game;
