import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Inventory.css";

class WritingInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            woodpencils: 795,
            mechpencils: 84,
            colorpencils: 63,
            ballpenblue: 396,
            ballpenblack: 380,
            ballpenred: 275,
            inkpenblue: 24,
            inkpenblack: 16,
            inkpenred: 19,
            inkpengreen: 6,
            inkpenorange: 3,
            gelpenblue: 46,
            gelpenblack: 40,
            gelpenred: 4,
            markersblue: 27,
            markersblack: 20,
            markersred: 20,
            markersgreen: 3,
            markersyellow: 7,
            markersorange: 4,
            markerspurple: 9,
            eraserpenciltop: 127,
            erasersmall: 42,
            eraserpink: 141,
            pencilsharpenersmall: 25,
            pencilsharpenerlarge: 17
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
                                        School Supplies - Writing Utensils Inventory
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-heading-left">Item</th>
                                    <th className="inv-heading-right">#</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="inv-item">Wood Pencils</th>
                                    <th className="inv-cnt">
                                        {this.state.woodpencils}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Mechanical Pencils</th>
                                    <th className="inv-cnt">
                                        {this.state.mechpencils}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Colored Pencils</th>
                                    <th className="inv-cnt">
                                        {this.state.colorpencils}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ballpoint Pen - Blue</th>
                                    <th className="inv-cnt">
                                        {this.state.ballpenblue}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ballpoint Pen - Black</th>
                                    <th className="inv-cnt">
                                        {this.state.ballpenblack}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ballpoint Pen - Red</th>
                                    <th className="inv-cnt">
                                        {this.state.ballpenred}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ink Pen - Blue</th>
                                    <th className="inv-cnt">
                                        {this.state.inkpenblue}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ink Pen - Black</th>
                                    <th className="inv-cnt">
                                        {this.state.inkpenblack}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ink Pen - Red</th>
                                    <th className="inv-cnt">
                                        {this.state.inkpenred}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ink Pen - Green</th>
                                    <th className="inv-cnt">
                                        {this.state.inkpengreen}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Ink Pen - Orange</th>
                                    <th className="inv-cnt">
                                        {this.state.inkpenorange}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Gel Pen - Blue</th>
                                    <th className="inv-cnt">
                                        {this.state.gelpenblue}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Gel Pen - Black</th>
                                    <th className="inv-cnt">
                                        {this.state.gelpenblack}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Gel Pen - Red</th>
                                    <th className="inv-cnt">
                                        {this.state.gelpenred}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Blue</th>
                                    <th className="inv-cnt">
                                        {this.state.markersblue}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Black</th>
                                    <th className="inv-cnt">
                                        {this.state.markersblack}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Red</th>
                                    <th className="inv-cnt">
                                        {this.state.markersred}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Green</th>
                                    <th className="inv-cnt">
                                        {this.state.markersgreen}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Yellow</th>
                                    <th className="inv-cnt">
                                        {this.state.markersyellow}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Orange</th>
                                    <th className="inv-cnt">
                                        {this.state.markersorange}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Markers - Purple</th>
                                    <th className="inv-cnt">
                                        {this.state.markerspurple}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Pencil Top Erasers</th>
                                    <th className="inv-cnt">
                                        {this.state.eraserpenciltop}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Small Erasers</th>
                                    <th className="inv-cnt">
                                        {this.state.erasersmall}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Pink Erasers</th>
                                    <th className="inv-cnt">
                                        {this.state.eraserpink}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Small Pencil Sharpeners</th>
                                    <th className="inv-cnt">
                                        {this.state.pencilsharpenersmall}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="inv-item">Large Pencil Sharpeners</th>
                                    <th className="inv-cnt">
                                        {this.state.pencilsharpenerlarge}
                                    </th>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className="inv-footing-left">Total</th>
                                <th className="inv-footing-right">
                                    {localStorage.writing}
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
        woodpencils: state.woodpencils,
        mechpencils: state.mechpencils,
        colorpencils: state.colorpencils,
        ballpenblue: state.ballpenblue,
        ballpenblack: state.ballpenblack,
        ballpenred: state.ballpenred,
        inkpenblue: state.inkpenblue,
        inkpenblack: state.inkpenblack,
        inkpenred: state.inkpenred,
        inkpengreen: state.inkpengreen,
        inkpenorange: state.inkpenorange,
        gelpenblue: state.gelpenblue,
        gelpenblack: state.gelpenblack,
        gelpenred: state.gelpenred,
        markersblue: state.markersblue,
        markersblack: state.markersblack,
        markersred: state.markersred,
        markersgreen: state.markersgreen,
        markersyellow: state.markersyellow,
        markersorange: state.markersorange,
        markerspurple: state.markerspurple,
        eraserpenciltop: state.eraserpenciltop,
        erasersmall: state.erasersmall,
        eraserpink: state.eraserpink,
        pencilsharpenersmall: state.pencilsharpenersmall,
        pencilsharpenerlarge: state.pencilsharpenerlarge
    }
}

export default connect(mapStateToProps)(withRouter(WritingInventory))