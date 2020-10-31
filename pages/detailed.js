import Head from 'next/head';
import { Row, Col, Breadcrumb, Affix } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from '@ant-design/icons';
import ReactMarkDown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';

export default function Detailed() {
  let markdown =
    '\n' +
    '# P01:课程介绍和环境搭建\n\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '`console.log(111)` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```';

  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm_main" justify="center">
        <Col className="comm_left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程-Tosei Blog开发(更新08集)
              </div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined /> 2019-06-28
                </span>
                <span>
                  <FolderOutlined /> 视频教程
                </span>
                <span>
                  <FireOutlined /> 5498人
                </span>
              </div>
              <div className="detailed-content">
                <ReactMarkDown children={markdown} allowDangerousHtml={false} />
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={10}>
            <div className="detailed-nav comm_box">
              <div className="nav-title">文章目录</div>
              <MarkdownNavbar
                className="article-menu"
                source={markdown}
                ordered={false}
              ></MarkdownNavbar>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

Detailed.getInitialProps = async (context) => {
  console.log(context);
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleById' + id).then((res) => {
      console.log(title);
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};
