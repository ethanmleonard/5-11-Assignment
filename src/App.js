import logo from './images/favicon-32x32.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    <div className="text">
    <h1>Learn to code by <br/> watching others</h1>
<p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
</div>
<div className="whole-box">
<div className="sign-up">
  <div className="free-trial">
    <button><span>Try it for free 7 days </span>then $20/mo. thereafter</button>
  </div>
  <div class="box">
    <label for="fname"></label>
    <input id="top" type="text" placeholder="     First Name" name="name" required/>
    
    <label for="lname"></label>
    <input type="text" placeholder="      Last Name" name="name" required/>

    <label for="email"></label>
      <input type="text" placeholder="      Email Address" name="email" required/>

    <label for="psw"></label>
    <input type="password" placeholder="      Password" name="psw" required/>
    <button>CLAIM YOUR FREE TRIAL</button>
    <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
  </div>
</div>
</div>
</div>
    </div>
  );
}

export default App;
