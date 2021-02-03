/** @format */

import React from 'react';
import * as dc from 'dc';
import { scaleTime, timeWeek } from 'd3';
import { ChartTemplate } from './ChartTemplate';

const lineChartFunc = (divRef, ndx, category) => {
  const dimension = ndx.dimension((d) => d.dateOfTheWeek);
  const lineChart = dc.lineChart(divRef);
  const group = dimension.group().reduceSum((d) => d[`${category}`]);

  lineChart
    .margins({ left: 74, top: 10, right: 20, bottom: 20 })
    .minHeight(500)
    .minWidth(500)
    .yAxisPadding(100)
    .dimension(dimension)
    .transitionDuration(1000)
    .x(scaleTime().domain([new Date(2015, 5, 25), new Date(2015, 8, 20)]))
    .group(group)
    .valueAccessor(function (d) {
      return d.value;
    })
    .renderArea(true)
    .elasticY(true)
    .renderDataPoints({ radius: 2, fillOpacity: 0.8, strokeOpacity: 0.0 })
    .xUnits(timeWeek)
    .valueAccessor(function (d) {
      return d.value;
    })
    .renderHorizontalGridLines(true)
    .renderLabel(true)
    .brushOn(true);

  return lineChart;
};

export const LineChart = () => (
  <div style={{ width: '1400px', margin: '0 auto' }}>
    <ChartTemplate chartFunction={lineChartFunc} id="Line Chart" />
  </div>
);
