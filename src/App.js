import './App.css';

function App() {
  const title = "Hello world!";
  const likes = 50;
  const person = {name: 'youu', age: 30}
  const numberArray = [1,2,3,4]
  const randomNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
  return (
    <div className="App">
     <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{person.age +  person.name}</p>
         
          <p>{Math.floor(Math.random() * numberArray.length)}</p>
          <p>Random number in array: {randomNumber}</p>
        <p>Random number in array {numberArray}</p>
     </div>
    </div>
  );
}

export default App;
