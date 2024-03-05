import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const List = styled.ul`
  font-size: 1.25em;

  li {
    margin: 20px;
  }
  ul {
    font-size: 0.8em;
    margin: 0;
  }
  ul li {
    margin: 0;
  }
  .button-container {
    display: block;
    margin-top: 20px;
  }
  
  .button {
    text-decoration: none;
  }
  
  .button button {
    border: none;
    padding: 8px 12px;
    font-size: 22px;
    border-radius: 50px;
    cursor: pointer;
    width: 250px;
    height: 60px;
    text-align: left;
  }

  #dex {
    background-color: rgb(180 169 249);
    color: rgb(255 255 255);
  }

  #dex:hover {
    background-color: rgb(147 139 195);;
  }

  #shiny {
    background-color: rgb(244 193 2);
    color: rgb(255 255 255);
  }
  
  #shiny:hover {
    background-color: rgb(194 154 0);
  }

  #lucky {
    background-color: rgb(255 189 107);
    color: rgb(255 255 255);
  }
  
  #lucky:hover {
    background-color: rgb(208 135 45);
  }

  #perfect {
    background-color: rgb(241 159 172);
    color: rgb(255 255 255);
  }
  
  #perfect:hover {
    background-color: rgb(200 115 128);
  }
  
  #shadow {
    background-color: rgb(203 153 255);
    color: rgb(255 255 255);
  }
  
  #shadow:hover {
    background-color: rgb(137 93 185);
  }

  #purified {
    background-color: rgb(148 210 206);
    color: rgb(255 255 255);
  }
  
  #purified:hover {
    background-color: rgb(87 155 151);
  }

  #event {
    background-color: rgb(227 172 227);
    color: rgb(255 255 255);
  }
  
  #event:hover {
    background-color: rgb(143 94 143);
  }

  #mega {
    background-color: rgb(218 133 181);
    color: rgb(255 255 255);
  }
  
  #mega:hover {
    background-color: rgb(175 91 139);
  }
  
  .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-size: cover;
    margin-right: 10px;
    vertical-align: middle;
  }

  #icon-todos{
    background-image: url('/Pogo-Checklist/images/pokedex.png');
  }

  #icon-shiny {
    background-image: url('/Pogo-Checklist/images/shiny.png');
  }
  
  #icon-lucky {
    background-image: url('/Pogo-Checklist/images/lucky.png');
  }

  #icon-perfect {
    background-image: url('/Pogo-Checklist/images/perfect.png');
  }

  #icon-shadow {
    background-image: url('/Pogo-Checklist/images/shadow.png');
  }

  #icon-purified {
    background-image: url('/Pogo-Checklist/images/purified.png');
  }

  #icon-event {
    background-image: url('/Pogo-Checklist/images/event.png');
  }

  #icon-mega {
    background-image: url('/Pogo-Checklist/images/mega.png');
  }
`;

function Home() {
  React.useEffect(() => {
    document.title = "GOChecklists: Up-to-date checklists for Pokémon GO";
  }, []);

  return (
    <React.Fragment>
      <Header title="Pokédex - Pokémon GO"></Header>

      <List>
      <div class="button-container">
        <Link to="/dex" className="button"> 
          <button id="dex">
            <span class="icon" id="icon-todos"></span>
            TODOS
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/shiny" className="button"> 
          <button id="shiny">
            <span class="icon" id="icon-shiny"></span>
            VARIOCOLOR
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/lucky" className="button"> 
          <button id="lucky">
            <span class="icon" id="icon-lucky"></span>
            CON SUERTE
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/perfect" className="button"> 
          <button id="perfect">
            <span class="icon" id="icon-perfect"></span>
            PERFECTO
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/shadow" className="button"> 
          <button id="shadow">
            <span class="icon" id="icon-shadow"></span>
            OSCUROS
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/purified" className="button"> 
          <button id="purified">
            <span class="icon" id="icon-purified"></span>
            PURIFICADOS
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/event" className="button"> 
          <button id="event">
            <span class="icon" id="icon-event"></span>
            DE EVENTOS
          </button>
        </Link>
      </div>
      <div class="button-container">
        <Link to="/mega" className="button"> 
          <button id="mega">
            <span class="icon" id="icon-mega"></span>
            MEGA
          </button>
        </Link>
      </div>
      </List>

      
      {/* <List>
        <li>
          <Link to="/dex">Dex</Link>
          <ul>
            <li>Track your main Pokédex completion in Pokémon GO.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny">ShinyDex</Link>
          <ul>
            <li>Track which of the available shinies you’ve caught.</li>
          </ul>
        </li>
        <li>
          <Link to="/lucky">LuckyDex</Link>
          <ul>
            <li>Track how many lucky Pokémon you’ve acquired.</li>
          </ul>
        </li>
        <li>
          <Link to="/unown">UnownDex</Link>
          <ul>
            <li>Track how many Unown you own.</li>
          </ul>
        </li>
        <li>
          <Link to="/shadow">ShadowDex</Link>
          <ul>
            <li>Track how many shadow Pokémon you have.</li>
          </ul>
        </li>
      </List> */}
    </React.Fragment>
  )
}

export default Home;
