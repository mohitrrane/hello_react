import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        if (this.props.todo.completed){
            return {
                textDecoration: 'line-through'
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
    render(){
        return(
        <div style={this.getStyle()}>
            {this.props.todo.title}
        </div>
    )};
} 

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;