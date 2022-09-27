import './App.css';
import Screen from './components/screen';
import { FunctionProvider } from './components/functions/index'


function App() {

  return (
    <div className="App">
      <FunctionProvider>
        <Screen />
      </FunctionProvider>
      
    </div>
  );
}

export default App;
