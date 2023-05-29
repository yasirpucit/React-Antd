import Styled from 'styled-components';

const LayoutWrapper = Styled.div`
.layout-parent-wrap {
  min-height: 100vh;
  }

  .layout-header-wrap {
    background: #001529;
    color: #fff;
    display: flex; 
    align-items: center
  }

  .layout-div-wrap {
    width: 400px;
    padding: 20px;
    margin-right: auto;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    text-align: center;
  }

  .layout-title-wrap {
    margin: 0;
    color: #fff;
  }

  .layout-image-wrap {
    width: 40px; 
    height: 40px; 
    margin-right: 20px
  }

  .layout-sider-wrap {
    background: #ffffff
  }

  .layout-content-wrap {
    padding: 0 24px 24px
  }
`;

export { LayoutWrapper };
