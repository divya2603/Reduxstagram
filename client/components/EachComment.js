import React from 'react';

class EachComment extends React.Component {
 
     render() {
      var eachComment = this.props.postComments.map((comment,i) => 
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            <input type="text" className="comment-input" defaultValue={comment.text}/>
            <button className="remove-comment" onClick = {this.props.incrementByOne.bind(null,this.props.params.postId, i)}>&hearts; ({comment.likes})</button>
            
            <button className="remove-comment" onClick = {this.props.removeComment.bind(null,this.props.params.postId, i)}>&times;</button>
          </p>
        </div>,this);
        return <div> {eachComment} </div>
      };
    }

export default EachComment;