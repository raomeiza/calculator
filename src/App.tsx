import './App.css';
import Calculator from './component/calculator';
import { LightModeProvider } from './context/lightModeContext';

export default function App() {
  return (
    <div className="App">
      <LightModeProvider>
        <Calculator />
      </LightModeProvider>
    </div>
  );
}
