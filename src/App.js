import Expenses from "./components/Expenses";
import { expenses } from "./constants";

function App() {
  return <Expenses items={expenses} />;
}

export default App;
