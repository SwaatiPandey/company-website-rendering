import Head from "next/head";
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
function Surfboard(props) {
  let surfboard = props.surfboard[0];
  return (
    <div>
      <div className={style["home"]}>
        <nav>
          <img src={surfboard.surfboardLogo} alt="" />
          <div className={style["li"]}>
            {surfboard.navigationLinks.map((link, i) => {
              return (
                <p className={style["a"]} key={i}>
                  {link}
                </p>
              );
            })}
          </div>
        </nav>
        <div className={style["banner"]}>
          <h1>{surfboard.bannerHeading}</h1>
          <p>{surfboard.bannerSubHeading}</p>
        </div>
      </div>
      <div className={style["portfolio"]}>
        <h1>Our Portfolio Companies</h1>
        <div className={style["portfolio-container"]}>
          <div className={style["portfolio-left"]}>
            <img src={surfboard.portfolioImage} alt="" />
          </div>
          <div className={style["portfolio-right"]}>
            {surfboard.companies.map((company, i) => {
              return (
                <div key={i}>
                  <Link href={company.siteLink}>
                    <a className={style["portfolio-anchor"]}>
                      {company.companyName}
                    </a>
                  </Link>
                  <p className={style["portfolio-desc"]}>
                    {company.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style["portfolio-button-container"]}>
          <button className={style["portfolio-button"]}>LEARN MORE</button>
        </div>
      </div>
      <div className={style["team"]}>
        <h1>Team</h1>
        <div className={style["team-container"]}>
          {surfboard.team.map((team, i) => {
            return (
              <div className={style["team-box"]} key={i}>
                <div className={style["team-box-left"]}>
                  <img src={team.image} alt="" />
                </div>
                <div className={style["team-box-right"]}>
                  <h1>{team.name}</h1>
                  <p>{team.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={style["philosophy"]}>
        <h1>Our Philosophy</h1>
        <div className={style["philosophy-container"]}>
          {surfboard.philosophy.map((philosophy, i) => {
            return (
              <div className={style["philosophy-box"]} key={i}>
                <img src={philosophy.image} alt="" />
                <h2>{philosophy.title}</h2>
                <p>{philosophy.content}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <footer className={style["footer"]}>
          <div className={style["footer-up"]}>
            <div className={style["footer-sec"]}>
              <img src={surfboard.surfboardLogo} alt="" />
            </div>
            <div className={style["footer-sec"]}>
              <a>Portfolio</a>
              <a>Acadmy</a>
              <a>Events</a>
            </div>
            <div className={style["footer-sec"]}>
              <a>Gallery</a>
              <a>E-Certificate</a>
              <a>Countact US</a>
            </div>
            <div className={style["footer-sec"]}>
              <p>info@surfboardventures.com</p>
            </div>
            <div className={style["footer-sec"]}>
            <div className={style["footer-icon"]}>
              <FaGithub />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaYoutube />
            </div>
            </div>
          </div>
          <div className={style["footer-down"]}>
            <div className={style["underline"]}></div>
            <p>Copyright © 2021 Surfboard Ventures. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "surfboard.json");
  return {
    props: {
      surfboard: [...data],
    },
  };
};
export default Surfboard;
