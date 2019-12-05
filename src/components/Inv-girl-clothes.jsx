import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class GirlClothingInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            girl_shirts: 21,
            girl_pants: 3,
            girl_shorts: 9,
            girl_socks: 17,
            girl_underwear: 24,
            girl_hats: 14,
            girl_gloves: 16,
            girl_scarves: 22
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
                                        Girl Clothing Inventory
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
                                        {this.state.girl_shirts}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Pants</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_pants}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Shorts</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_shorts}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Socks</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_socks}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Underwear</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_underwear}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Hats</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_hats}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Gloves</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_gloves}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Scarves</th>
                                    <th className="inv-cnt">
                                        {this.state.girl_scarves}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.girlclothing}
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
        boy_shirts: state.girl_shirts,
        boy_pants: state.girl_pants,
        boy_shorts: state.girl_shorts,
        boy_socks: state.girl_socks,
        boy_underwear: state.girl_underwear,
        boy_hats: state.girl_hats,
        boy_gloves: state.girl_gloves,
        boy_scarves: state.girl_scarves
    }
}

export default connect(mapStateToProps)(withRouter(GirlClothingInventory))