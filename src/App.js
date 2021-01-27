import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
