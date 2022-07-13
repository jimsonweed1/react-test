import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Аavascript_1', body: 'Eescription'},
    {id: 2, title: 'Яavascript_2', body: 'Aescription'},
    {id: 3, title: 'Пavascript_3', body: 'Tescription'}
  ])
  const [selectedSort, setSelectedSort] = useState('');
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  //получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange = {sortPosts}
          defaultValue = 'Sort By'
          options={[
            {value: 'title', name: 'Sort by name'},
            {value: 'body', name: 'Sort by description'},
          ]}
        />

      </div>
      {posts.length !== 0
        ? 
          <PostList posts={posts} remove={removePost} title='Post list 1'/>
        : 
          <h1 style={{textAlign: 'center'}}>
            Posts not found!
          </h1>
      }
    </div>
  );
}

export default App;
