import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class BoyToysInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boy_action_figures: 6,
            boy_hot_wheels: 9,
            boy_balls: 14,
            boy_lovies: 21,
            boy_plastic: 7,
            boy_kits: 2
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
                                        Boy Toys Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Action Figures</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_action_figures}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Hot Wheels</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_hot_wheels}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Balls</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_balls}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Lovies</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_lovies}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Small Plastic Things</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_plastic}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Construction Kits</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_kits}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.boytoys}
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
        boy_action_figures: state.boy_action_figures,
        boy_hot_wheels: state.boy_hot_wheels,
        boy_balls: state.boy_balls,
        boy_lovies: state.boy_lovies,
        boy_plastic: state.boy_plastic,
        boy_kits: state.boy_kits
    }
}

export default connect(mapStateToProps)(withRouter(BoyToysInventory))