import './App.css';
import Calculator from './component/calculator';
import { UserProvider } from './context/userContext';
export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Calculator />
      </UserProvider>
    </div>
  );
}
