import style from '../styles/components/Advert.module.css';
const Advert = () => {
  return (
    <div className={`${style.ad_div} ${'comm_box'}`}>
      <div>
        <img src="https://newimg.jspang.com//next_blog.jpg" width="100%" />
        <img src="https://newimg.jspang.com/react_blog_demo.jpg" width="100%" />
        <img src="https://newimg.jspang.com/Vue3_logo.jpg" width="100%" />
        <img src="https://newimg.jspang.com/TaroLogo.jpg" width="100%" />
      </div>
    </div>
  );
};

export default Advert;
