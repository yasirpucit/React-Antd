import styled from 'styled-components';

const DashboardWrapper = styled.div`
  .chartjs-render-monitor {
    height: 475px;
    width: 741px;
  }
  .dash-inner-pro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .cards-flow-max {
    display: flex;
    justify-content: space-between;
  }
  .chart-content-wrapper {
    border-radius: 8px;
  }
  .line-card-content {
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
  }
  .table-parent-wrap {
    right: 0;
    width: 300px;
    height: 355px;
    overflow: auto;
  }
  .table-heading-wrap {
    background: lightgray;
    border-radius: 8px 8px 0px 0px;
    height: 40px;
    text-align: center;
    margin-bottom: 0px;
  }
`;

export { DashboardWrapper };
