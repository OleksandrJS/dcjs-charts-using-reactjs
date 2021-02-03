/** @format */

import React from 'react';
import * as dc from 'dc';
import { ChartTemplate } from './ChartTemplate';

const pieChartFunc = (divRef, ndx, category) => {
  const dimension = ndx.dimension((d) => d.item_category);
  const group = dimension.group().reduceSum((d) => d[`${category}`]);

  const pieChart = dc.pieChart(divRef);

  pieChart
    .minWidth(500)
    .minHeight(500)
    .dimension(dimension)
    .group(group)
    .renderLabel(true)
    .innerRadius(4)
    .transitionDuration(500)
    .colorAccessor((d) => d.value)
    .legend(
      new dc.HtmlLegend()
        .container(divRef)
        .horizontal(true)
        .highlightSelected(true),
    );
  return pieChart;
};

export const PieChart = () => (
  <ChartTemplate chartFunction={pieChartFunc} id="Pie Chart" />
);
