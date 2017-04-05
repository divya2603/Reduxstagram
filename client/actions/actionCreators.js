// increment likes on posts
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// increment likes on comments
export function incrementComments(index, postId) {
    return {
        type: 'INCREMENT_LIKES_COMMENTS',
        index,
        postId
    }
}

// add comment
export function addComment(postId, author,comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// edit comment
export function editComment(postId, author,comment) {
    return {
        type: 'EDIT_COMMENT',
        postId,
        author,
        comment
    }
}
// edit comment
export function replyComment(forPostId,fromPostId, fromAuthor,fromComment) {
    return {
        type: 'REPLY_COMMENT',
        forPostId,
        fromPostId,
        fromAuthor,
        fromComment
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
