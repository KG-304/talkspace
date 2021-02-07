import "./App.scss";
import RouterBoss from "./router/routerBoss";
import GlobalState from "./state_manage/globalState";

function App() {
  return (
    <GlobalState>
      <RouterBoss />
    </GlobalState>
  );
}

export default App;
