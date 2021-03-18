import React, {Component} from 'react';
import Dice from './Dice';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps ={
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = {diceone: 'one', dicetwo: 'one'};
        this.roll = this.roll.bind(this);
    }
    roll(){
        //pick number 
        const NewDieOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const NewDieTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        // set state 
        this.setState({diceone: NewDieOne, dicetwo: NewDieTwo})
    }
    render(){
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face={this.state.diceone}/>
                    <Dice face={this.state.dicetwo}/>
                </div>
            <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}
export default RollDice;