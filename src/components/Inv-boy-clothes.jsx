import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class BoyClothingInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boy_shirts: 4,
            boy_pants: 2,
            boy_shorts: 3,
            boy_socks: 14,
            boy_underwear: 12,
            boy_hats: 4,
            boy_gloves: 16,
            boy_scarves: 1
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
                                        Boy Clothing Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Shirts</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_shirts}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Pants</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_pants}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Shorts</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_shorts}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Socks</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_socks}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Underwear</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_underwear}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Hats</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_hats}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Gloves</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_gloves}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Scarves</th>
                                    <th className="inv-cnt">
                                        {this.state.boy_scarves}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.boyclothing}
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
        boy_shirts: state.boy_shirts,
        boy_pants: state.boy_pants,
        boy_shorts: state.boy_shorts,
        boy_socks: state.boy_socks,
        boy_underwear: state.boy_underwear,
        boy_hats: state.boy_hats,
        boy_gloves: state.boy_gloves,
        boy_scarves: state.boy_scarves
    }
}

export default connect(mapStateToProps)(withRouter(BoyClothingInventory))