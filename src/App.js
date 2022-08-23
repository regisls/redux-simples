import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Card title='Teste' red>adfadf</Card>
        <Card title='Teste' green>adfadf</Card>
      </div>
      <div className='linha'>
        <Card title='Outro' blue>aaaaa</Card>
        <Card title='Outro' purple>aaaaa</Card>
      </div>
    </div>
  );
}

export default App;
