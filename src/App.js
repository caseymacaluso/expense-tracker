import Expenses from "./components/expenses/Expenses";
import { expenses } from "./constants";

function App() {
  return <Expenses items={expenses} />;
}

export default App;
