import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CandlestickChart extends Component {
  generateDummyData = () => {
    const dataPoints = [];
    const startDate = new Date("2024-05-01");
    const endDate = new Date("2024-12-31");

    while (startDate <= endDate) {
      const open = Math.random() * 100 + 1300;
      const high = open + Math.random() * 50;
      const low = open - Math.random() * 50;
      const close = open + (Math.random() - 0.5) * 50;

      dataPoints.push({
        x: new Date(startDate),
        y: [open, high, low, close],
        color: close > open ? "#28a745" : "#dc3545" // Specific colors for bullish/bearish
      });

      startDate.setDate(startDate.getDate() + 1);
    }

    return dataPoints;
  };

  render() {
    const options = {
      theme: "light1",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Stock Price Over Time",
        fontSize: 24,
        fontColor: "#333",
        horizontalAlign: "center"
      },
      axisX: {
        valueFormatString: "MMM",
        title: "Months",
        titleFontColor: "#333",
        labelFontColor: "#666",
        labelFontSize: 12,
        position: "bottom" // Ensure month appears at the bottom
      },
      axisY: {
        prefix: "$",
        title: "Price (in USD)",
        titleFontColor: "#333",
        labelFontColor: "#666",
        labelFontSize: 12,
        gridThickness: 0.5,
        gridColor: "#ccc",
        opposite: true // Make the y-axis appear on the right side
      },
      data: [{
        type: "candlestick",
        risingColor: "#28a745",
        fallingColor: "#dc3545",
        axisYType: "secondary",
        showInLegend: true,
        name: "Stock",
        yValueFormatString: "$###0.00",
        xValueFormatString: "MMMM YY",
        dataPoints: this.generateDummyData()
      }]
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default CandlestickChart;


// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class CandlestickChart extends Component {
//   generateDummyData = () => {
//     const dataPoints: any[] = [];
//     const startDate = new Date("2024-05-01");
//     const endDate = new Date("2024-12-31");

//     while (startDate <= endDate) {
//       const open = Math.random() * 100 + 1300;
//       const high = open + Math.random() * 50;
//       const low = open - Math.random() * 50;
//       const close = open + (Math.random() - 0.5) * 50;

//       dataPoints.push({
//         x: new Date(startDate),
//         y: [open, high, low, close],
//         color: close > open ? "green" : "red" // Green for Bullish, Red for Bearish
//       });

//       startDate.setDate(startDate.getDate() + 1);
//     }

//     return dataPoints;
//   };

//   render() {
//     const options = {
//       theme: "light2", // "light1", "light2", "dark1", "dark2"
//       animationEnabled: true,
//       exportEnabled: true,
//       title: {
//         text: "Stock Price Over Time"
//       },
//       axisX: {
//         valueFormatString: "MMM"
//       },
//       axisY: {
//         prefix: "$",
//         title: "Price (in USD)"
//       },
//       data: [{
//         type: "candlestick",
//         showInLegend: true,
//         name: "Stock",
//         yValueFormatString: "$###0.00",
//         xValueFormatString: "MMMM YY",
//         dataPoints: this.generateDummyData()
//       }]
//     };

//     return (
//       <div>
//         <CanvasJSChart options={options} />
//       </div>
//     );
//   }
// }

// export default CandlestickChart;