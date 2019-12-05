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
            user: "Rhonda"
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
                </div>
                <div className="cell-dashboard">Clothing - Boys
                  <hr />
                  <img className="cell-image" src={boy} alt="boy-clothing"></img>
                </div>
                <div className="cell-dashboard">Clothing - Girls
                  <hr />
                  <img className="cell-image" src={girl} alt="girl-clothing"></img>  
                </div>
                <div className="cell-dashboard">Shoes
                  <hr />
                  <img className="cell-image" src={shoes} alt="shoes"></img>
                </div>
                <div className="cell-dashboard">Toys - Boys
                  <hr />
                  <img className="cell-image" src={boytoys} alt="boy-toys"></img>
                </div>
                <div className="cell-dashboard">Toys - Girls
                  <hr />
                  <img className="cell-image" src={girltoys} alt="girl-toys"></img>
                </div>
                <div className="cell-dashboard">School Supplies - Paper
                  <hr />
                  <img className="cell-image" src={paper} alt="paper"></img>
                </div>
                <div className="cell-dashboard">School Supplies - Writing
                  <hr />
                  <img className="cell-image" src={pens} alt="writing"></img>
                </div>
                <div className="cell-dashboard">Craft Supplies
                  <hr />
                  <img className="cell-image" src={scissors} alt="craft"></img>
                </div>
              </div>
            </header>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)
