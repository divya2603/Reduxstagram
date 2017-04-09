function postComments(state=[],action) {
    switch(action.type) {
      case 'ADD_COMMENT':
          return [...state, {user: action.author, text: action.comment, likes: 0}]
      case 'REMOVE_COMMENT':
          return [
            ...state.slice(0,action.i),
            ...state.slice(action.i+1)
          ]
      case 'EDIT_COMMENT':
        return [
          ...state.filter(id => id !== action.postId), Object.assign({}, action.postId),{text : action.comment, disabled: !disabled }
        ]
      case 'INCREMENT_LIKES_COMMENTS':
      const i = action.index;
        return [
            ...state.slice(0,i), //before the one we are updating,
            {...state[i],likes:state[i].likes+1},
            ...state.slice(i+1), //after the one we are updating
          ]
      default:
          return state;
    }
    return state;
}
function comments( state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
          ...state,
          [action.postId]: postComments(state[action.postId],action)
        }
    }
    return state;
}

export default comments;