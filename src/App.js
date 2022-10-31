import './App.css';
import Input from './component/input';
import Image from './component/Signup-image';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="signup-box">
          <Image />
          <div className='align-item'>
            <h2 className='h2'>
              Business news delivered
              weekly.
            </h2>
            <span>
              <p className='p-text'>
                Stay up to date with the latest articles and business
                updates. You'll even get special recommendations
                weekly.
              </p>
            </span>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
