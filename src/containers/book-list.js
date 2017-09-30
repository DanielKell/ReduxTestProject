//The purpose of this is to create a list of books
//Note: Writing a word pulls the whole object; writing a {} pulls just 1 property
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //This helps actions flow through their reducers

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

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to
    //all of our reducers. bindActionCreators+dispatch passes to the reducers!
    return bindActionCreators({ selectBook: selectBook}, dispatch)
    //We are now about to call 'this.props.selectBook'!
}

//Promote BookList from a component to a container - it needs to know about
//this new dispatch method, selectBook. Mat it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//Connect takes a function and a component and makes a container.
//This container is a component that is aware of the state contained within it.