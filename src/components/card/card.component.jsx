import { Component } from "react";
import './card.styles.css'

class Card extends Component{
    render(){
        const {id, name, email} = this.props.monster
        return (
            <div className="card-container">
                <img src={`https://robohash.org/${id}?size=180x180`} alt="robot monster" />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card