import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class PaperInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spiral_wide: 75,
            spiral_college: 72,
            loose_wide: 26,
            loose_college: 37,
            printer: 112,
            colored: 87,
            construction: 28,
            folder_no_brads: 95,
            folder_w_brads: 163
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
                                        School Supplies - Paper Products Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Wide Rule Spirals</th>
                                    <th className="inv-cnt">
                                        {this.state.spiral_wide}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">College Rule Spirals</th>
                                    <th className="inv-cnt">
                                        {this.state.spiral_college}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Wide Rule Loose Leaf</th>
                                    <th className="inv-cnt">
                                        {this.state.loose_wide}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">College Rule Loose Leaf</th>
                                    <th className="inv-cnt">
                                        {this.state.loose_college}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">White Printer Paper</th>
                                    <th className="inv-cnt">
                                        {this.state.printer}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Colored Paper</th>
                                    <th className="inv-cnt">
                                        {this.state.colored}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Construction Paper</th>
                                    <th className="inv-cnt">
                                        {this.state.construction}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Paper Folders (no brads)</th>
                                    <th className="inv-cnt">
                                        {this.state.folder_no_brads}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Paper Folders (with brads)</th>
                                    <th className="inv-cnt">
                                        {this.state.folder_w_brads}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.paper}
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
        spiral_wide: state.spiral_wide,
        spiral_college: state.spiral_college,
        loose_wide: state.loose_wide,
        loose_college: state.loose_college,
        printer: state.printer,
        colored: state.colored,
        construction: state.construction,
        folder_no_brads: state.folder_no_brads,
        folder_w_brads: state.folder_w_brads
    }
}

export default connect(mapStateToProps)(withRouter(PaperInventory))