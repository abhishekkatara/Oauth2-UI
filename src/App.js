import logo from './logo.svg';
import './App.css';
import  SplashScreen from './screens/SplashScreen'
import SideNavigationBar from './components/SideNavigationBar'
import 'react-pro-sidebar/dist/css/styles.css';
import  HomeScreen from './features/dashboard/Screens/HomeScreen'
import 'font-awesome/css/font-awesome.min.css';




import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  useNavigate,
} from "react-router-dom";

function App() {


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  return (
    <div className="App">
      <header className="App-header">


      <SideNavigationBar/>

    
      <Routes>
            <Route path="/HomeScreen" element={<HomeScreen />} />
            <Route path="/" element={<SplashScreen />} />
      </Routes>

      {/* <button onClick={() => {
          navigate('CopyNewComponent', { replace: false });
        }}>
  Activate Lasers
</button> */}
      </header>
      

      
    </div>
  );
}

export default App;
