"use strict";
{
  const hideSideNav = () => {
    document.getElementById("sideNav").style.display = "none";
    document.getElementById("rightArrow").style.display = "inline";
    document.getElementById("leftArrow").style.display = "none";

    buildChart(incidentChartData);
    buildChart(problemChartData);
    buildChart(changeChartData);
  };

  const showSideNav = () => {
    document.getElementById("sideNav").style.display = "inline-block";
    document.getElementById("rightArrow").style.display = "none";
    document.getElementById("leftArrow").style.display = "inline";

    clearChart("incidentChart");
    clearChart("problemChart");
    clearChart("incidentChart");
  };

  const clearChart = canvas => {
    let chart = document.getElementById(canvas).getContext("2d");
    let width = 0;
    let height = 0;

    chart.clearRect(0, 0, width, height);
  };

  const buildChart = chartObj => {
    //chartObj.chartLabels - Labels for the x chart axis
    //chartObj.dataSetLabel - Label for a data set
    //chartObj.dataSet - Data for a data set
    //chartObj.canvas - elementID of the canvas element to target
    //chartObj.height - sets the height of the chart

    var chart = document.getElementById(chartObj.canvas).getContext("2d");
    chart.canvas.parentNode.style.height = chartObj.height;

    let JSONdata = [];

    for (let i = 0; i < chartObj.dataSet.length; i++) {
      let newData = {
        label: chartObj.dataSetLabel[i],
        data: chartObj.dataSet[i],
        backgroundColor: chartObj.backgroundColor[i],
        borderColor: chartObj.borderColor[i],
        borderWidth: 1
      };
      JSONdata.push(newData);
    }

    var chart = new Chart(chart, {
      type: "line",
      data: {
        labels: chartObj.chartLabels,
        datasets: JSONdata
      },
      options: {
        // This will stop the chart from being to tall if the aspect ration isn't right
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };

  document.getElementById("leftArrow").addEventListener("click", hideSideNav);
  document.getElementById("rightArrow").addEventListener("click", showSideNav);

  let incidentChartData = {
    chartLabels: [
      "Jan",
      "Fed",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], // Labels for the x chart axis
    dataSetLabel: ["Tickets by Month", "Tickets by Week", "Tickets by Year"], // Label for a data set
    dataSet: [
      ["5", "1", "10", "7", "3", "2", "5", "1", "10", "7", "3", "2"],
      ["2", "3", "4", "9", "8", "3", "2", "4", "6", "10", "4", "1"],
      ["7", "8", "1", "2", "5", "10", "4", "8", "2", "3", "8", "9"]
    ], // Data for a data set
    canvas: "incidentChart", // elementID of the canvas element to target
    height: "350px", // sets the height of the chart
    backgroundColor: [
      ["rgba(255, 0, 0, 0.15)"],
      ["rgba(0, 255, 0, 0.15)"],
      ["rgba(0, 0, 255, 0.15)"]
    ],
    borderColor: [
      ["rgba(255, 0, 0, 0.15)"],
      ["rgba(0, 255, 0, 0.15)"],
      ["rgba(0, 0, 255, 0.15)"]
    ]
  };

  let problemChartData = {
    chartLabels: [
      "Jan",
      "Fed",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], // Labels for the x chart axis
    dataSetLabel: ["Problem by Month", "Problem by Week", "Problem by Year"], // Label for a data set
    dataSet: [
      ["2", "4", "6", "10", "4", "1", "2", "3", "4", "9", "8", "3"],
      ["5", "1", "10", "7", "3", "2", "4", "8", "2", "3", "8", "9"],
      ["7", "8", "1", "2", "5", "10", "5", "1", "10", "7", "3", "2"]
    ], // Data for a data set
    canvas: "problemChart", // elementID of the canvas element to target
    height: "350px", // sets the height of the chart
    backgroundColor: [
      ["rgba(255, 0, 0, 0.15)"],
      ["rgba(0, 255, 0, 0.15)"],
      ["rgba(0, 0, 255, 0.15)"]
    ],
    borderColor: [
      ["rgba(255, 0, 0, 0.15)"],
      ["rgba(0, 255, 0, 0.15)"],
      ["rgba(0, 0, 255, 0.15)"]
    ]
  };

  let changeChartData = {
    chartLabels: [
      "Jan",
      "Fed",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ], // Labels for the x chart axis
    dataSetLabel: ["Change by Month", "Change by Week", "Change by Year"], // Label for a data set
    dataSet: [
      ["2", "4", "6", "10", "4", "1", "2", "3", "4", "9", "8", "3"],
      ["5", "1", "10", "7", "3", "2", "4", "8", "2", "3", "8", "9"],
      ["7", "8", "1", "2", "5", "10", "5", "1", "10", "7", "3", "2"]
    ], // Data for a data set
    canvas: "changeChart", // elementID of the canvas element to target
    height: "350px", // sets the height of the chart
    backgroundColor: [
      ["rgba(255, 0, 0, 0.15)"],
      ["rgba(0, 255, 0, 0.15)"],
      ["rgba(0, 0, 255, 0.15)"]
    ],
    borderColor: [
      ["rgba(255, 0, 0, 0.15)"],
      ["rgba(0, 255, 0, 0.15)"],
      ["rgba(0, 0, 255, 0.15)"]
    ]
  };

  buildChart(incidentChartData);
  buildChart(problemChartData);
  buildChart(changeChartData);
}
