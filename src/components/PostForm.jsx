import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create})  => {
    const [post, setPost] = useState({title:'',body:'',link:''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title:'',body:'',link:''});
    }
    
       
    return(
        <form>
        {/* Поле для наименования поста */}
            <MyInput 
                value = {post.title}
                onChange = {e => setPost({...post, title: e.target.value})}
                type='text' 
                placeholder='Post name'
            />
        {/* Поле для описания поста */}
            <MyInput 
                value = {post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type='text' 
                placeholder='Post description'
            />
        {/* Поле для ссылки на картинку */}
            <MyInput 
                value = {post.link}
                onChange = {e => setPost({...post, link: e.target.value})}
                type='text' 
                placeholder='Post image'
            />

        {/* Кнопка */}
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>

    );
};

export default PostForm