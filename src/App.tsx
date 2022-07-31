import { ModalsProvider } from "./contexts/modals";
import "./global/styles.scss";
import { MainRouter } from "./routes/routes";

function App() {
  return (
  
    <ModalsProvider>
      <MainRouter />
    </ModalsProvider>
  );
}

export default App;
