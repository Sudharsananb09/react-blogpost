import './App.css';
import PostList from './features/PostList';
import AddPostForm from './features/AddPostForm';


function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
