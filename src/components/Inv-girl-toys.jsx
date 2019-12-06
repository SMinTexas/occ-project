import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class GirlToysInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            girl_dolls: 10,
            girl_balls: 12,
            girl_lovies: 34,
            girl_animals: 12,
            girl_plastic: 2,
            girl_kits: 3
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
                                        Girl Toys Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Dolls</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_dolls}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Balls</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_balls}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Lovies</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_lovies}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Stuffed Animals</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_animals}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Small Plastic Things</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_plastic}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Kits</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_kits}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.girltoys}
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
        girl_dolls: state.girl_dolls,
        girl_balls: state.girl_balls,
        girl_lovies: state.girl_lovies,
        girl_animals: state.girl_animals,
        girl_plastic: state.girl_plastic,
        girl_kits: state.girl_kits
    }
}

export default connect(mapStateToProps)(withRouter(GirlToysInventory))