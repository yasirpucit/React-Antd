/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { DashboardOutlined, DollarCircleOutlined, HistoryOutlined } from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../static/assets/chatgpt.svg';

import { LayoutWrapper } from './style';

const { Header, Sider, Content, Footer } = Layout;

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
            <div>
              <Header className="layout-header-wrap">
                <div className="layout-outer-wrap">
                  <div className="layout-div-wrap">
                    <h2 className="layout-title-wrap">React Ant BoilerPlate</h2>
                  </div>
                  <div>
                    <img className="layout-image-wrap" src={Logo} alt="Logo" />
                  </div>
                </div>
              </Header>
            </div>
            <Layout>
              <Sider className="layout-sider-wrap" width={200}>
                <div className="ant-title-info">
                  <img className="layout-image-wrap" src={Logo} alt="Logo" />
                </div>
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
                  <WrappedComponent {...this.props} />
                  <Footer className="admin-footer layout-footer-wrap">
                    <Row>
                      <Col md={12} xs={24}>
                        <span className="admin-footer__copyright">{new Date().getFullYear()} © SovWare</span>
                      </Col>
                      <Col md={12} xs={24}>
                        <div className="admin-footer__links">
                          <NavLink to="#">About</NavLink>
                          <NavLink to="#">Team</NavLink>
                          <NavLink to="#">Contact</NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Footer>
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
