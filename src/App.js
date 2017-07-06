import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="ui fixed top menu">
                <a className="right  item" id="navBarItem"> Saison actuelle <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/season4 icone.webp')} /></a>

          </div>
        <img className="ImgHeader" src={require('/home/etheyr/Bureau/Projects/ecommerce/src/6d074304dfaebce28f034c888447e424.jpg')} />
          <div className="ui top menu">
              <div className="item">
               <img src={require('/home/etheyr/Bureau/Projects/ecommerce/src/overwatchLogo.png')} />
              </div>
                <a className="item" id="navBarItem">Potg</a>
                <a className="item" id="navBarItem">Guides</a>
                <a className="item" id="navBarItem">News</a>
                <a className="item" id="navBarItem">Hero</a>
                <a className="right orange active item" id="navBarItem">Connexion</a>
                  <a className="orange active item" id="navBarItem">Inscription</a>

          </div>
          <div className="overPlay">
          </div>

          <br/>
          <br/>
          <br/>
              <div className="ui inverted segment">
               <div className="ui two column centered grid">
             <img ClassName="iconeClass" src={require('/home/etheyr/Bureau/Projects/ecommerce/public/OffenseIcon.png')}/>
             <h1 className="heroClass">Héros d'attaque</h1>
             </div>
          <br/>
          <br/>
          <br/>

            <div className="ui two column centered grid">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_tracer_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Tracer</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_genji_mignon-400x400.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Genji</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_pharah_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Phara</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_soldat_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Soldat 76</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_mccree_mignon-400x400.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">MCCree</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_faucheur_mignon-400x400.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Faucheur</div>
              </div>
            </div>
            </div>


          </div>
          </div>

          <br/>
          <br/>
          <br/>
              <div className="ui inverted segment">
               <div className="ui two column centered grid">
             <img ClassName="iconeClass" src={require('/home/etheyr/Bureau/Projects/ecommerce/public/DefenseIcon.png')}/>
             <h1 className="heroClass">Héros de défense</h1>
             </div>
          <br/>
          <br/>
          <br/>

          <div className="ui two column centered grid">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_bastion_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Bastion</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_chacal_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Chacal</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_fatale_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Fatale</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_hanzo_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Hanzo</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_mei_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Mei</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_torbjorn_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Torbjörn</div>
              </div>
            </div>
          </div>
          </div>
          </div>

          <br/>
          <br/>
          <br/>
        <div className="ui inverted segment">
              <div className="ui two column centered grid">
             <img ClassName="iconeClass" src={require('/home/etheyr/Bureau/Projects/ecommerce/public/TankIcon.png')}/>
             <h1 className="heroClass">Héros Tank</h1>
             </div>
          
          <br/>
          <br/>
          <br/>


          <div className="ui two column centered grid">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_chopper_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Chopper</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_dva_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">D.va</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/e5a6vynE.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Orisa</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_reinhardt_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Reinhardt</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/e5a6vynE.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Winston</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_zarya_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Zarya</div>
              </div>
            </div>
          </div>
          </div>
          </div>


          <br/>
          <br/>
          <br/>
              <div className="ui inverted segment">
               <div className="ui two column centered grid">
             <img ClassName="iconeClass" src={require('/home/etheyr/Bureau/Projects/ecommerce/public/SupportIcon.png')}/>
             <h1 className="heroClass">Héros de soutien</h1>
             </div>
          <br/>
          <br/>
          <br/>


          <div className="ui two column centered grid">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/e5a6vynE.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Ana</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_ange_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Ange</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_lucio_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Lùcio</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_symmetra_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Symmetra</div>
              </div>
            </div>
            <div className="card">
              <div className="image">
                <img src={require('/home/etheyr/Bureau/Projects/ecommerce/public/tag_overwatch_heros_zenyatta_mignon.png')}/>
              </div>
              <div className="content">
                <div id="heroName" className="header">Zenyatta</div>
              </div>
            </div>
          </div>
          </div>
          </div>

          <br/>
          <br/>
          <br/>



      </div>


    );
  }
}

export default App;
