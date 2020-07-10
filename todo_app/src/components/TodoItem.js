import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render(){
        return(
        <div style={itemStyle}>
            {this.props.todo.title}
        </div>
    )};
} 

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor: '#f4f4f4'
}

export default TodoItem;