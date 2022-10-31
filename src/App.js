import './App.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="signup-box">
          <div className="left-img">
            <img height={800} width={700} src={window.location.origin + '/signup2.png'} />
          </div>
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
            <div className='signup-input-box'>
              <input className='input' type={"text"} placeholder="Your Email" />
              <div className='signup-button'>
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
