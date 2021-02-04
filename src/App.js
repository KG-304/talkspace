import "./App.scss";
import Header from "./atoms/header";
import Login from "./atoms/login";
import GlobalState from "./state_manage/globalState";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <Header />
        <Login />
      </div>
    </GlobalState>
  );
}

export default App;
