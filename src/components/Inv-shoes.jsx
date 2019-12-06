import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class ShoesInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sandals: 22,
            flipflops: 25
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
                                        Shoes Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Sandals</th>
                                    <th className="inv-cnt">
                                        {this.state.sandals}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Flip-Flops</th>
                                    <th className="inv-cnt">
                                        {this.state.flipflops}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.shoes}
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
        sandals: state.sandals,
        flipflops: state.flipflops
    }
}

export default connect(mapStateToProps)(withRouter(ShoesInventory))