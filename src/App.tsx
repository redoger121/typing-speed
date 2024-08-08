import './App.css';
import { GlobalContextProvider } from './components';
import { MainPage } from './pages';

function App() {
  return (
    <GlobalContextProvider>
      <MainPage />
    </GlobalContextProvider>
  );
}

export default App;
