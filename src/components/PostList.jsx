import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts,title,link,remove}) => {
    return (
        <div>
            <h1 style={{textAlign : 'center'}}>
                {title}
            </h1>
        {posts.map((post, index) => 
            <PostItem 
                remove={remove}
                number = {index + 1} 
                post = {post} 
                key = {post.id}
                link={post.link}
            />
        )} 
        </div>
    );
};

export default PostList;