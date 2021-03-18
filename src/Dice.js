import React, {Component} from 'react'
import './Dice.css'

class Dice extends Component {
 render(){
     let cast = `Dice fas fa-dice-${this.props.face}`
     return <i className={cast}></i>
 }
}
export default Dice;