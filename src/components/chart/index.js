/* eslint-disable react/prop-types */
import React from 'react';

import { Line } from 'react-chartjs-2';

const LineChart = ({ data, options, height, width }) => (
  <Line height={height} width={width} options={options} data={data} />
);

export default LineChart;
