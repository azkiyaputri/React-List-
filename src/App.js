import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div> <hr />
      <nav class="navbar navbar-expand-lg navbar-warning bg-light">
        <a class="navbar-brand" href="/">Beranda</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/tentangsaya">Tentang Saya <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/karya">Karya</a> 
          <a class="nav-item nav-link" href="/kontak">Kontak</a>
          <a class="nav-item nav-link" href="/list">List</a>
        </div>
      </div>
      </nav>
      <hr />
      <p><Utama /></p>
      </div>
    );
  }
}

export default App;