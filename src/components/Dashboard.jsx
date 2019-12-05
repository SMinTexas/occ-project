import React, { Component } from "react";
import { connect } from "react-redux";
//import "../App.css";
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
                <div className="cell-dashboard">Hygiene
                  <hr />
                  <img className="cell-image" src={toothbrush} alt="hygiene"></img>
                  <p>Total Inventory: {localStorage.hygiene}</p>
                </div>
                <div className="cell-dashboard">Clothing - Boys
                  <hr />
                  <img className="cell-image" src={boy} alt="boy-clothing"></img>
                  <p>Total Inventory: {localStorage.boyclothing}</p>
                </div>
                <div className="cell-dashboard">Clothing - Girls
                  <hr />
                  <img className="cell-image" src={girl} alt="girl-clothing"></img>  
                  <p>Total Inventory: {localStorage.girlclothing}</p>
                </div>
                <div className="cell-dashboard">Shoes
                  <hr />
                  <img className="cell-image" src={shoes} alt="shoes"></img>
                  <p>Total Inventory: {localStorage.shoes}</p>
                </div>
                <div className="cell-dashboard">Toys - Boys
                  <hr />
                  <img className="cell-image" src={boytoys} alt="boy-toys"></img>
                  <p>Total Inventory: {localStorage.boytoys}</p>
                </div>
                <div className="cell-dashboard">Toys - Girls
                  <hr />
                  <img className="cell-image" src={girltoys} alt="girl-toys"></img>
                  <p>Total Inventory: {localStorage.girltoys}</p>
                </div>
                <div className="cell-dashboard">School Supplies - Paper
                  <hr />
                  <img className="cell-image" src={paper} alt="paper"></img>
                  <p>Total Inventory: {localStorage.paper}</p>
                </div>
                <div className="cell-dashboard">School Supplies - Writing
                  <hr />
                  <img className="cell-image" src={pens} alt="writing"></img>
                  <p>Total Inventory: {localStorage.writing}</p>
                </div>
                <div className="cell-dashboard">Craft Supplies
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
