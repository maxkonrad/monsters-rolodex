import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component{
    render(){
        return (
            <input placeholder={this.props.placeholder} type="search" onChange={this.props.onChangeHandler} className="search-box" />
        )
    }
}

export default SearchBox;