import logo from '../logo.svg';
import '../styles/SplashScreen.css';
import GoogleButton from 'react-google-button'
import axios from 'axios';


import {
  useNavigate,
} from "react-router-dom";


function SplashScreen() {
  let navigate = useNavigate();
  function login() {
    const url = 'https://585f-27-57-177-85.ngrok.io';
    axios.get(url+'/auth/login/google',{
      method: "GET",
      headers: {
        // "access-control-allow-origin" : "*",
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json; charset=UTF-8"
      }})
      .then(response => response.json())
      .then(data => {
        navigate('HomeScreen')
        //this.setState({ totalReactPackages: data.total })
      });
  }
  
  return (
    <div class="float-container">
        <div class='float-child'>
          <p class='styleHeaderTitleText'>AFFIDAVITS & RFI </p>
          <p className='styleHeaderText'>Looks like you’re not yet connected with your Google Account</p>
          <p className='styleHeaderSubTitleText'>Lets make your trip fun and simple</p>

          <GoogleButton  style={{color:"#fff"}} type='dark' onClick={ login }/>
        </div>
        <div class='float-child-right'>
          <img src='https://s3-alpha-sig.figma.com/img/fda3/be0e/1cf8eba10e26c2326d63b31d1d572a37?Expires=1652054400&Signature=a2bap5-JPhOo~N58u-z9ogpATNycHUCdzSErfuc6m46ltVU46Cj6qSYxJKgRZnmVwE25ys5fx~pALDePuhiUwO8U-WAvX4VggUrLDXiqPQl9n~fkWujNjonGOHIIf9ro7YncQXd~rGDIfEqoBA6acxZiRA4~vk5QOsLjRoDWpp6QwaVBb4O~Glyi~vm6BZpwZAdv76D3XoYyV06fNgQIzg0lzza2cDP2umh-hDOOdQJrb94b-Dr6~0GOZNtnjag5QmMyKQ7YDJiBT0OBZXD4BY6VUY~Bm6r9f1PeUlCzUDE5cO-jx-LxaPxwbzb19BKDVbu25uVnwBhIkSI1Fl7ekw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' 
               className="App-logo" alt="logo" />
        </div>

    </div>
  );
}
export default SplashScreen;
