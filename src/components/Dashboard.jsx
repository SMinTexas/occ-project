import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./BaseLayout.css";
import toothbrush from "../../src/toothbrush.jpeg";
import boy from "../../src/boy.jpeg";
import girl from "../../src/girl.jpeg";
import shoes from "../../src/shoes.jpeg";
import boytoys from "../../src/boytoy.jpeg";
import girltoys from "../../src/girltoys.jpeg";
import paper from "../../src/paper.jpeg";
import pens from "../../src/pens.jpeg";
import scissors from "../../src/scissors.jpeg";

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "Rhonda",
            hygiene: "",
            boyclothing: "",
            girlclothing: "",
            shoes: "",
            boytoys: "",
            girltoys: "",
            paper: "",
            writing: "",
            craft: ""
        }
    }

    render() {
        return (
            <div className="dashboard">
            <header className="dashboard-header">
              <div className="grid-dashboard">
                <div className="cell-dashboard"><NavLink to="/hygiene">Hygiene</NavLink>
                  <hr />
                  <img className="cell-image" src={toothbrush} alt="hygiene"></img>
                  <p>Total Inventory: {localStorage.hygiene}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/boyclothes">Clothing - Boys</NavLink>
                  <hr />
                  <img className="cell-image" src={boy} alt="boy-clothing"></img>
                  <p>Total Inventory: {localStorage.boyclothing}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/girlclothes">Clothing - Girls</NavLink>
                  <hr />
                  <img className="cell-image" src={girl} alt="girl-clothing"></img>  
                  <p>Total Inventory: {localStorage.girlclothing}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/shoes">Shoes</NavLink>
                  <hr />
                  <img className="cell-image" src={shoes} alt="shoes"></img>
                  <p>Total Inventory: {localStorage.shoes}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/boytoys">Toys - Boys</NavLink>
                  <hr />
                  <img className="cell-image" src={boytoys} alt="boy-toys"></img>
                  <p>Total Inventory: {localStorage.boytoys}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/girltoys">Toys - Girls</NavLink>
                  <hr />
                  <img className="cell-image" src={girltoys} alt="girl-toys"></img>
                  <p>Total Inventory: {localStorage.girltoys}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/paper">School Supplies - Paper</NavLink>
                  <hr />
                  <img className="cell-image" src={paper} alt="paper"></img>
                  <p>Total Inventory: {localStorage.paper}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/writing">School Supplies - Writing</NavLink>
                  <hr />
                  <img className="cell-image" src={pens} alt="writing"></img>
                  <p>Total Inventory: {localStorage.writing}</p>
                </div>
                <div className="cell-dashboard"><NavLink to="/craft">Craft Supplies</NavLink>
                  <hr />
                  <img className="cell-image" src={scissors} alt="craft"></img>
                  <p>Total Inventory: {localStorage.craft}</p>
                </div>
              </div>
            </header>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        hygiene: state.hygiene,
        boyclothing: state.boyclothing,
        girlclothing: state.girlclothing,
        shoes: state.shoes,
        boytoys: state.boytoys,
        girltoys: state.girltoys,
        paper: state.paper,
        writing: state.writing,
        craft: state.craft
    }
}

export default connect(mapStateToProps)(Dashboard)
