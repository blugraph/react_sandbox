import React, { useEffect } from "react";
import Breadcrumbs from "./Breadcrumbs";
import TableList from "./TableList";
import { useToggle } from "./ToggleContext";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default function Projects(props) {
  const user = useToggle();

  return (
    <>
      <Breadcrumbs title="Projects" breadcrumbItem="Projects" />
      {!user.toggleValue ? <ProjectChart /> : <TableList />}
    </>
  );
}

function ProjectChart(props) {
  return (
    <>
      <ChartComponent />
    </>
  );
}

function ChartComponent(props) {
  useEffect(() => {
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
      },
      {
        country: "Czechia",
        litres: 301.9,
      },
      {
        country: "Ireland",
        litres: 201.1,
      },
      {
        country: "Germany",
        litres: 165.8,
      },
      {
        country: "Australia",
        litres: 139.9,
      },
      {
        country: "Austria",
        litres: 128.3,
      },
      {
        country: "UK",
        litres: 99,
      },
      {
        country: "Belgium",
        litres: 60,
      },
      {
        country: "The Netherlands",
        litres: 50,
      },
    ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
  }, []);
  return <div id="chartdiv" style={{ height: "550px" }}></div>;
}
