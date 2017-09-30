//This is going to contain all of the action creators

export function selectBook(book) {
    //selectBook is an action creator, so it should return an action.
    //An action is an object with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}