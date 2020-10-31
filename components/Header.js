import React from 'react';
import { Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';
// 组件的css引入要采用以下的方式 在js中解析也是用{}来做
import style from '../styles/components/Header.module.css';

const Header = () => (
  <div className={style.header}>
    <Row justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className={style.header_logo}>Tosei</span>
        <span className={style.header_text}>专注全栈开发，欢迎咨询。</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu className={style.ant_menu2} mode="horizontal">
          <MenuItem className={style.ant_menu_item2} key="home">
            <HomeOutlined />
            主页
          </MenuItem>
          <MenuItem className={style.ant_menu_item2} key="video">
            <YoutubeOutlined />
            视频
          </MenuItem>
          <MenuItem className={style.ant_menu_item2} key="life">
            <SmileOutlined />
            生活
          </MenuItem>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
