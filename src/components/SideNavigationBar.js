
import React from "react";
import '../styles/SideNavigationBar.css'

const SideNavigationBar =()=>{
    return(
         <div>
            <nav class="main-menu">
                <div>   
                     <a class="logo" href="http://startific.com"></a> 
                </div> 
                <div class="settings"></div>
                <div class="scrollbar" id="style-1">
                    <ul>
                    <li class='home'>                                   
                        <a onclick="openNav()">
                            <i class="fa fa-home fa-lg"></i>
                            <span class="nav-text">Home</span>
                        </a>
                    </li>   
                    <li>                                 
                        <a href="http://startific.com">
                            <i class="fa fa-user fa-lg"></i>  
                            <span class="nav-text">Login</span>
                        </a>
                    </li>   
                    <li>                                 
                        <a href="http://startific.com">
                            <i class="fa fa-envelope-o fa-lg"></i>
                            <span class="nav-text">Contact</span>
                        </a>
                    </li>   
   
                    <li class="darkerlishadow">
                        <a href="http://startific.com">
                            <i class="fa fa-clock-o fa-lg"></i>
                            <span class="nav-text">News</span>
                        </a>
                    </li>
            
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-desktop fa-lg"></i>
                            <span class="nav-text">Technology</span>
                        </a>
                    </li>
   
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-plane fa-lg"></i>
                            <span class="nav-text">Travel</span>
                        </a>
                    </li>
              
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-shopping-cart"></i>
                            <span class="nav-text">Shopping</span>
                        </a>
                    </li>
              
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-microphone fa-lg"></i>
                            <span class="nav-text">Film & Music</span>
                        </a>
                     </li>
  
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-flask fa-lg"></i>
                            <span class="nav-text">Web Tools</span>
                        </a>
                    </li>
              
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-picture-o fa-lg"></i>
                            <span class="nav-text">Art & Design</span>
                        </a>
                    </li>
  
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-align-left fa-lg"></i>
                            <span class="nav-text">Magazines</span>
                        </a>
                    </li>
              
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-gamepad fa-lg"></i>
                            <span class="nav-text">Games</span>
                        </a>
                    </li>
              
                    <li class="darkerli">
                        <a href="http://startific.com">
                            <i class="fa fa-glass fa-lg"></i>
                            <span class="nav-text">Life & Style</span>
                        </a>
                    </li>
              
                    <li class="darkerlishadowdown">
                        <a href="http://startific.com">
                            <i class="fa fa-rocket fa-lg"></i>
                            <span class="nav-text">Fun</span>
                        </a>
                    </li>
                    </ul>
                    <li>                              
                    <a href="http://startific.com">
                        <i class="fa fa-question-circle fa-lg"></i>
                        <span class="nav-text">Help</span>
                    </a>
                    </li>   
                    <ul class="logout">
                    <li>
                        <a href="http://startific.com">
                            <i class="fa fa-lightbulb-o fa-lg"></i>
                            <span class="nav-text"> BLOG </span>
                        </a>
                    </li>  
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default SideNavigationBar;