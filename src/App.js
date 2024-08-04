import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';

const App = () => {
  return(
    <div className='responsive-dashboard-container'>
      <Header />
      <div className='container'>
        <Sidebar />
        <div> Others </div>
      </div>  
    </div>
  )
}

export default App;
