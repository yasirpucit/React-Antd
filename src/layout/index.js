/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined, DollarCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import Logo from '../static/assets/chatgpt.svg';

import { LayoutWrapper } from './style';

const { Header, Sider, Content } = Layout;

const ThemeLayout = WrappedComponent => {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() { }

    render() {
      return (
        <LayoutWrapper>
          <Layout className="layout-parent-wrap">
            <Header className="layout-header-wrap">
              <div className="layout-div-wrap">
                <h2 className="layout-title-wrap">React Ant BoilerPlate</h2>
              </div>
              <div>
                <img className="layout-image-wrap" src={Logo} alt="Logo" />
              </div>
            </Header>
            <Layout>
              <Sider className="layout-sider-wrap" width={200}>
                <Menu mode="vertical" defaultSelectedKeys={['dashboard']}>
                  <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                    Dashboard
                  </Menu.Item>
                  <Menu.Item key="settlements" icon={<DollarCircleOutlined />}>
                    Settlements
                  </Menu.Item>
                  <Menu.Item key="history" icon={<HistoryOutlined />}>
                    History
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="layout-content-wrap">
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  {/* Content of your page goes here */}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </LayoutWrapper>
      );
    }
  }

  const mapStateToProps = state => ({
    ChangeLayoutMode: state?.ChangeLayoutMode?.data,
    rtl: state?.ChangeLayoutMode?.rtlData,
    topMenu: state?.ChangeLayoutMode?.topMenu,
  });

  return connect(mapStateToProps)(LayoutComponent);
};
export default ThemeLayout;
