import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import m from './assests/m';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
function App() {
  const [movies , setMovies]=useState(m);
  const addMovie=(title ,description , rating, posterURL)=>{
    const newMovie={title ,description , rating, posterURL};
    setMovies(movies =>[...movies,newMovie]);
  };
  const movieArray=useSelector((state)=>state.counterReducer.movies);
  return (
  
    <div className="App">
    <AddMovie onAdd={addMovie}/>
     <MovieList movies={movieArray}/>
    </div>
    
  );
}

export default App;
