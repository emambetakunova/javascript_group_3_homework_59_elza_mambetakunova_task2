import React, {Component} from 'react';
import './Button.css'

class Button extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    render() {
        return (
            <div className="Button">
                <button className="Refresh" onClick={this.props.onClick}>Refresh</button>
            </div>
        );
    }

}

export default Button;