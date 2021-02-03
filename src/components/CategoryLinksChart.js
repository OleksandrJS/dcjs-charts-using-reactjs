/** @format */

import React from 'react';
import * as dc from 'dc';
import { ChartTemplate } from './ChartTemplate';

const linksChartFunc = (divRef, ndx, category) => {
  const dimension = ndx.dimension((d) => d.item_category);
  const group = dimension.group().reduceSum((d) => d[`${category}`]);

  const linksChart = dc.pieChart(divRef);
  linksChart
    .dimension(dimension)
    .group(group)
    .legend(
      new dc.HtmlLegend()
        .container(divRef)
        .horizontal(true)
        .highlightSelected(true),
    );
  return linksChart;
};

export const CategoryLinksChart = () => (
  <div className="invisible">
    <ChartTemplate chartFunction={linksChartFunc} id="Links Chart" />
  </div>
);
