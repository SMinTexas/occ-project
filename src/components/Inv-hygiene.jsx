import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class HygieneInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brushes: 89,
            combs: 76,
            toothbrushes: 123,
            girlstuff: 12,
            washcloths: 83
        };
    }

    handleDashboardClick = () => {
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <>
                <div className="inventory">
                    <div className="inventory-header">
                        <table width="25%">
                            <thead>
                                <tr>
                                    <th className="inv-caption" colspan="2">
                                        Hygiene Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Brushes</th>
                                    <th className="inv-cnt">
                                        {this.state.brushes}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Combs</th>
                                    <th className="inv-cnt">
                                        {this.state.combs}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Toothbrushes</th>
                                    <th className="inv-cnt">
                                        {this.state.toothbrushes}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Wash Cloths</th>
                                    <th className="inv-cnt">
                                        {this.state.washcloths}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Girl Stuff</th>
                                    <th className="inv-cnt">
                                        {this.state.girlstuff}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.hygiene}
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                        <br />
                        <button onClick={this.handleDashboardClick}>Back to Dashboard</button>
                    </div>
                </div>
  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        brushes: state.brushes,
        combs: state.combs,
        toothbrushes: state.toothbrushes,
        girlstuff: state.girlstuff,
        washcloths: state.washcloths
    }
}

export default connect(mapStateToProps)(withRouter(HygieneInventory))



// <tr className="inv-row">
// <th className="inv-header">Toothbrushes</th>
// <td className="inv-data">{this.state.toothbrushes}</td>
// </tr>
// <tr className="inv-row">
// <th className="inv-header">Washcloths</th>
// <td className="inv-data">{this.state.washcloths}</td>
// </tr>
// <tr className="inv-row">
// <th className="inv-header">Girl Stuff</th>
// <td className="inv-data">{this.state.girlstuff}</td>
// </tr>