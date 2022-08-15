import './App.css';
import Header from './components/header';
import PostPreview from './components/homepage/postPreview';
function App() {
  const name = 'mmdxlili';
  return (
    <div className="App">
        <Header />
        <PostPreview authorTitle={name}/>
    </div>
  );
}

export default App;
