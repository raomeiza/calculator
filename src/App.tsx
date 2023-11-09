import './App.css';
import Home from './component/Home';
import { UserProvider } from './context/userContext';
export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}
