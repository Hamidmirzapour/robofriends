import CardList from '../components/CardList';
import './App.css';
import { robots } from '../robots';


const App = () => {
  return (
    <div>
      <CardList robots={robots} />
    </div>
  );
}

export default App;
