import logo from "./logo.svg";
import "./App.css";

function App() {
  var v1 = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="trulala">table</div>
      <table>
        <tr>1</tr>
        <tr>1</tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
      </table>
    </div>
  );

  console.log(v1);

  console.log(v1.props.App);

  return v1;
}

export default App;
