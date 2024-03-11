import './App.css';
import AddTask from "./components/AddTask";
import DisplayList from './components/DisplayTask';
import TotalTask from './components/TotalTasks';

function App() {
  return (
    <div className="card border-primary m-4">
      <div className='card-header text-center'><h2>Tasks</h2></div>
      <div className='card-body'>
        <div className='row m-2'>
          <div className='col-md-6'>
            <AddTask/>
            </div>
          <div className='col-md-6'>
            <div>
              <DisplayList/>
            </div>
            </div>
          <div className='col-md-6'>
            <TotalTask/>
            </div>

          </div>
        </div>
      </div>
  );
}

export default App;
