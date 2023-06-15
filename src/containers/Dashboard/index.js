/* eslint-disable no-new */
/* eslint-disable react/no-array-index-key */
import React from 'react';
// import Chart from 'chart.js/auto';

import { Card, Table } from 'antd';
import { DashboardWrapper } from './style';
import Logo from '../../static/assets/chatgpt.svg';

import LineChart from '../../components/chart';

import {
  projectColumnsTable,
  sampleProjects,
  sampleChartData,
  lineChartOptions,
  sampleStatisticsData,
  backgroundCardColors,
  generateRandomCurve,
} from '../../helpers/constants';

const Dashboard = () => (
  <DashboardWrapper>
    <div>
      <div className="dash-inner-pro">
        {sampleStatisticsData.map((data, index) => (
          <Card
            key={index}
            style={{
              width: 'calc(25% - 12px)',
              height: 'calc(20% - 32px)',
              borderRadius: '8px',
              background: backgroundCardColors[index],
            }}
          >
            <img src={Logo} height={20} width={20} alt="" />
            <div className="cards-flow-max">
              <div style={{ display: 'block' }}>
                <h3>{data.label}</h3>
                <h2>{data.value}</h2>
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '30px',
                  background:
                    'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 100%)',
                  clipPath: generateRandomCurve(),
                }}
              />
            </div>
          </Card>
        ))}
      </div>
      <div className="line-card-content">
        <div className="table-parent-wrap">
          <h2 className="table-heading-wrap">Projects Completed</h2>
          <Table dataSource={sampleProjects} columns={projectColumnsTable} pagination={false} />
        </div>
        <div>
          <Card className="chart-content-wrapper">
            <h3>Sales History</h3>
            <LineChart height={275} width={741} options={lineChartOptions} data={sampleChartData} />
          </Card>
        </div>
      </div>
    </div>
  </DashboardWrapper>
);

export default Dashboard;
