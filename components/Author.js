import { Avatar, Divider } from 'antd';
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import authorCss from '../styles/components/Author.module.css';

const Author = () => {
  return (
    <div className={`${authorCss.author_div} ${'comm_box'}`}>
      {/* {}中多个class的写法如下 */}
      <div>
        <Avatar
          size={100}
          src="https://avatars2.githubusercontent.com/u/11283532?s=400&u=99b1b5149227f799252f0e8d2c0e2533d5070089&v=4"
        />
      </div>
      <div className={authorCss.author_introduction}>
        专注全栈开发，擅长Java,Spring,Php,React,Vue,Flutter等技术,欢迎咨询联系
        <Divider>社交账号</Divider>
        <Avatar
          size={28}
          icon={<GithubOutlined />}
          className={authorCss.account}
        />
        <Avatar size={28} icon={<QqOutlined />} className={authorCss.account} />
        <Avatar
          size={28}
          icon={<WechatOutlined />}
          className={authorCss.account}
        />
      </div>
    </div>
  );
};

export default Author;
