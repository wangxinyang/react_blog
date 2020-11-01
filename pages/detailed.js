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
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

export default function Detailed(props) {
  console.log(props);
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });

  let html = marked(props.articleCointent);

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
                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">{props.title}</div>
              <div className="list-icon center">
                <span>
                  <CalendarOutlined /> {props.addTime}
                </span>
                <span>
                  <FolderOutlined /> {props.addTime}
                </span>
                <span>
                  <FireOutlined /> {props.viewCount}人
                </span>
              </div>
              <div
                className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={10}>
            <div className="detailed-nav comm_box">
              <div className="nav-title">文章目录</div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

Detailed.getInitialProps = async (context) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleById/' + id).then((res) => {
      resolve(res.data.data[0]);
    });
  });
  return await promise;
};
