import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice Blog!" 
                userAvatar={faker.image.avatar()} 
            />
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="Bad Blog!" 
                userAvatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:45PM" 
                content="Bice Nlog!" 
                userAvatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))
