import Customer from './components/Customers';
import './App.css';
import CustomerForm from './components/CustomerForm';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header/>
      <CustomerForm/>
      <Customer/>
    </div>
  );
}

export default App;
