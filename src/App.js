import { ChatProvider } from './context/ChatContext';
import './App.css';
import Container from './components/Container';

function App() {
  
  return (
    <div className="App">
      <ChatProvider>
        <Container />
      </ChatProvider>
    </div>
  );
}

export default App;
