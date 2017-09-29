//The purpose of this is to create a list of books
//Note: Writing a word pulls the whole object; writing a {} pulls just 1 property
import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//Note: State contains the array of books and active book.
function mapStateToProps(state) {
    //Whatever gets returns from here, will show up as props inside of BookList
    return {
        books: state.books //connection between redux and component
        //This is available as this.props.books
    };
}

export default connect(mapStateToProps)(BookList);
//Connect takes a function and a component and makes a container.
//This container is a component that is aware of the state contained within it.