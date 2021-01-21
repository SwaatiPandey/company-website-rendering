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
function Contentstack(props) {
  let contentstack = props.contentstack[0];
  return (
    <>
      <title>Contentstack</title>
      <div className={style["head-sec"]}>
        {/* navigation bar */}
        <nav className={style["navbar"]}>
          <img src={contentstack.contentstackLogo} alt="" />
          <div className={style["link-sec"]}>
            {contentstack.navigationLinks.map((link, i) => {
              return <p key={i}>{link}</p>;
            })}
          </div>
        </nav>
        {/* banner */}
        <div className={style["banner-container"]}>
          <div className={style["banner"]}>
            <h1>{contentstack.heading}</h1>
            <h3>{contentstack.subHeading}</h3>
            <button>TRY FOR FREE</button>
            <p>Request a Demo</p>
          </div>
        </div>{" "}
        <div></div>
      </div>
      <div className={style["why-sec-container"]}>
        <div className={style["why-sec"]}>
          <h1>Why Choose Contentstack?</h1>
          <div className={style["card-sec"]}>
            {contentstack.whyChooseContentstack.map((whyChoose, i) => {
              return (
                <div key={i} className={style["card"]}>
                  <h3>{whyChoose.title}</h3>
                  <p>{whyChoose.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style["buttom-sec"]}>
        <h1>{contentstack.bottomBanner.title}</h1>
        <div className={style["buttom-grp"]}>
          <button>REQUEST A DEMO</button>
          <button>TRY FOR FREE</button>
        </div>
      </div>

      <footer className={style["footer"]}>
        <div className={style["footer-upper"]}>
          <div className={style["footer-left"]}>
            <img
              src="https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blt954cedac0397edba/5f1a2be1d0350a5e2a2fde71/contentstack-footer-logo.png"
              alt=""
            />
            <div className={style["icons"]}>
              <div className={style["icons-style"]}>
                <FaGithub />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className={style["footer-right"]}>
            <div className={style["footer-sec"]}>
              <h2>Product</h2>
              <a>Features</a>
              <a>For IT & Developers</a>
              <a>For Business</a>
              <a>Integrations</a>
              <a>Pricing</a>
              <a>ROI Calculator</a>
              <a>Customer Success</a>
            </div>
            <div className={style["footer-sec"]}>
              <h2>Users</h2>
              <a>Supported Platforms</a>
              <a>FAQs</a>
              <a>Trust</a>
              <a>System Status</a>
            </div>
            <div className={style["footer-sec"]}>
              <h2>Education</h2>
              <a>Customer Resources</a>
              <a>CMS Guides</a>
              <a>Blog</a>
              <a>Docs</a>
            </div>
            <div className={style["footer-sec"]}>
              <h2>Company</h2>
              <a>About</a>
              <a>News</a>
              <a>Press</a>
              <a>Careers</a>
              <a>Become a Partner</a>
              <a>Contact Us</a>
            </div>
          </div>
        </div>
        <div className={style["footer-lower"]}>
          <div className={style["footer-lower-underline"]}></div>
          <div className={style["link"]}>
            {contentstack.footer.map((footerLinks, i) => {
              return (
                <li className={style["link-bottom-last"]} key={i}>
                  {footerLinks}
                </li>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "contentstack.json");
  return {
    props: {
      contentstack: [...data],
    },
  };
};
export default Contentstack;