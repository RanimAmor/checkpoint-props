import './App.css';
import Profile from './profile/Profile';
const handleName  = name => alert(name);

function App() {
  return (
    <div style={{textAlign:"center"}} >
      <br></br>
     <Profile name="Sarah" profession="Software engineer" bio="Frontend developer" handleName={handleName}><img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"alt="Profile Picture"  width="350px" height="350px" /></Profile> 
    </div>
  );
}

export default App;
