import Link from "next/link";
import axios from "axios";
import url from "../../apiCall/data";
import style from "./style.module.css";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
function RawEngineering(props) {
  let rawengineering = props.rawengineering[0];
  return (
    <>
      <title>Rawengineering</title>
      <div id="main-container">
        {/* navigation bar */}
        <nav className={style["navbar"]}>
          <img src={rawengineering.rawengineeringLogo} alt="" />
          <div className={style["li"]}>
            {rawengineering.navigationLinks.map((link, i) => {
              return (
                <p className={style["a"]} key={i}>
                  {link}
                </p>
              );
            })}
          </div>
        </nav>
        {/* banner */}
        <div>
          <div className={style["banner"]}>
            <div className={style["banner-left"]}>
              <h1>{rawengineering.title}</h1>
              <h3>{rawengineering.subtitle}</h3>
            </div>
            <div className={style["banner-right"]}>
              <img
                src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blte86401d468e74845/5e3137f08f7e217daef66f54/Landing_Page_Image_Motion.jpg"
                alt="image"
              />
            </div>
          </div>
          <div className={style["banner-end"]}>
            <p>{rawengineering.shortIntro}</p>
            <button>LEARN MORE</button>
            {/* <p>Request a Demo</p> */}
          </div>
        </div>
        <hr />
        <div className={style["container"]}>
          <h1>_____What we do</h1>
          {rawengineering.whatWeDo.map((whatWeDo, i) => {
            return (
              <div className={style["box"]} key={i}>
                <img src={whatWeDo.imageUrl} alt="" />
                <div className={style["box-right"]}>
                  <h3>{whatWeDo.heading}</h3>
                  <p>{whatWeDo.subHeading}</p>
                </div>
              </div>
            );
          })}

          <div>
            <h1>___LATEST WORK</h1>
            <div className={style["work-container"]}>
              {rawengineering.latestWork.map((latestWork, i) => {
                return (
                  <div key={i}>
                    <img src={latestWork.imageUrl} alt="" />
                    <h3>{latestWork.title}</h3>
                    <h4>{latestWork.caseStudyHeading}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className={style["testimonial"]}>
          <h1>_____TESTIMONIALS</h1>
          <div className={style["testimonial-container"]}>
            {rawengineering.testimonials.map((testimonials, i) => {
              return (
                <div className={style["testimonial-box"]} key={i}>
                  <img src={testimonials.imageUrl} alt="" />
                  <h3>{testimonials.name}</h3>
                  <h3>{testimonials.companyName}</h3>
                  <h4>{testimonials.message}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <footer className={style["footer"]}>
          <div className={style["footer-sec1"]}>
            <h1>Ready to get started on your next project?</h1>
            <button>GET IN TOUCH</button>
          </div>
          <div className={style["footer-sec2-container"]}>
            <div className={style["footer-sec2-left"]}>
              <p>Privacy Backend Terms of Use</p>
              <p>Copyright © 2021 Raw Engineering LLC. All Rights Reserved.</p>
              <img src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100" alt="SOC Logo" width="70"></img>
            </div>
            <div className={style["footer-icon"]}>
              <FaGithub />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "raw-engineering.json");
  return {
    props: {
      rawengineering: [...data],
    },
  };
};
export default RawEngineering;