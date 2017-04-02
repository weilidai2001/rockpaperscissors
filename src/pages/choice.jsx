import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Choice extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.makeChoice = this.makeChoice.bind(this)
    }

    makeChoice(choiceType) {
        this.props.onChoiceClick(choiceType);
        this.props.history.push('/game-result');
    }

    render() {
        const choices = this.props.choices;

        return (
            <div className="choice">
                {
                    choices.map((choice, index) => <div key={index} className="choice__button" onClick={() => this.makeChoice(choice.id)}>{choice.displayAs}</div>)
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChoiceClick: (type) => dispatch({type})
    };
}

export default connect(null, mapDispatchToProps)(Choice);
