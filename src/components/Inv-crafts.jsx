import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class CraftsInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scissors: 139,
            glue: 73,
            crayon12: 765,
            crayon24: 423,
            crayon26: 140
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
                                        Crafts Supplies Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Kid Scissors</th>
                                    <th className="inv-cnt">
                                        {this.state.scissors}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Glue Sticks</th>
                                    <th className="inv-cnt">
                                        {this.state.glue}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Crayons (12ct)</th>
                                    <th className="inv-cnt">
                                        {this.state.crayon12}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Crayons (24ct)</th>
                                    <th className="inv-cnt">
                                        {this.state.crayon24}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Crayons (26ct)</th>
                                    <th className="inv-cnt">
                                        {this.state.crayon26}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.craft}
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
        scissors: state.scissors,
        glue: state.glue,
        crayon12: state.crayon12,
        crayon24: state.crayon24,
        crayon26: state.crayon26
    }
}

export default connect(mapStateToProps)(withRouter(CraftsInventory))