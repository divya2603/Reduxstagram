// increment likes on posts
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// increment likes on comments
export function incrementByOne(postId, index) {
    return {
        type: 'INCREMENT_LIKES_COMMENTS',
        postId,
        index
    }
}

// add comment
export function addComment(postId, author,comment, likes) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment,
        likes
    }
}

// edit comment
export function editComment(postId, index, disabled) {
    return {
        type: 'EDIT_COMMENT',
        postId,
        index,
        disabled
    }
}

// remove comment
export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}
