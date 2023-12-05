import React  from 'react';
import MainContent from './MainContent'; // Make sure the path is correct
// If you have Header and Footer components, import them here
// import Header from './Header';
// import Footer from './Footer';
import './App.css'; // This is your global stylesheet
import Hero from './Hero';
import Footer from './Footer';


const App = () => {
  // const [results, setResults] = useState([]);
  
  // const fetchPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
  //   .then((response) => response.json())
  //   .then((data) => setResults(data));
  // }

  // useEffect(() => {
  //   fetchPosts()
  // }, []);
  
  return (
    <div className="App">
      <Hero />
      {/* Uncomment these if you have created Header and Footer components */}
      {/* <Header /> */}
      <MainContent/>
      {/* <h2>Results</h2>
      {results.map((result) => 
      <Result
      key={result.id}
      id={result.id}
      title={result.title}
      body={result.body}
/>)} */}
      <Footer />

    </div>
    
  );
};

export default App;

