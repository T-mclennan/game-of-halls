import React, { Component } from "react";
import { Card } from "reactstrap";
import Chart from "react-google-charts";
import { Link } from "react-router-dom";
import "../../../App.css";

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="gameDetails">
          <h3>The UC Davis energy efficiency tracker game.</h3>
          <h3>First Place: Building 1!</h3>
        </div>
        <Card body className="dataCard" style={cardStyle}>
          <Chart
            style={{ marginLeft: "10rem" }}
            width={"45rem"}
            height={"20rem"}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Week", "Building1", "Building2", "Building3"],
              ["12/21", 1000, 400, 500],
              ["12/28", 1170, 700, 600],
              ["01/05", 660, 1120, 1200],
              ["01/12", 1030, 800, 540]
            ]}
            options={{
              title: "Building Energy Use Performance",
              hAxis: { title: "Week", titleTextStyle: { color: "#333" } },
              vAxis: { minValue: 0 },
              // For the legend to fit, we make the chart area smaller
              chartArea: { width: "70%", height: "90%" }
              // lineWidth: 25
            }}
            // For tests
            rootProps={{ "data-testid": "1" }}
          />
          <div className="buildingLinks">
            <Link to="/building1">Building 1</Link>
            <Link to="/building1">Building 2</Link>
            <Link to="/building1">Building 3</Link>
          </div>
        </Card>
      </div>
    );
  }
}

const cardStyle = {
  float: "none",
  // marginTop: "2.5rem",
  width: "50rem",
  boxShadow: "0 19px 18px",
  justifyContent: "center",
  fontSize: "1.3rem",
  padding: "2rem",
  marginBottom: "10rem"
};

export default Landing;
