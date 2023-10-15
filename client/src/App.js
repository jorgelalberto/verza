import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
    <section className="Chat">
      <div className="Chat-Input-Box">
        <textarea className="Chat-Input-Text" 
        placeholder="Type message here...">
        </textarea>
      </div>
    </section>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>

    //<aside className="sidemenu">
      //<h1>Aside</h1>
    //</aside>
  );
}

export default App;
