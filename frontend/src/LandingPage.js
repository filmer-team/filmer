import {Component} from "react";
import axios from "axios";

import "./style.css";
import "./LandingPage.css";

// graphics import
import "./logo_transbackground.svg"

class LandingPage extends Component 
{

  render ()
  {
    return (
<div class="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">

  <header class="masthead mb-auto">
    <img src="logo_transbackground.svg" width="100px"/>
  </header>

  <main role="main" class="mb-5">
    <h1 class="cover-heading">Where people find their favourite movies!</h1>
    <div class="mt-5">
      <button type="button" class="btn btn-light m-1">Sign up</button>
      <button type="button" class="btn btn-light m-1">Log in</button>
    </div>
  </main>

  <footer class="mastfoot mt-auto">
    <div class="inner">
      <p><a href="">About</a> - <a href="">For Developers</a></p>
    </div>
  </footer>

</div>
  
    );
  }

}

export default LandingPage;

