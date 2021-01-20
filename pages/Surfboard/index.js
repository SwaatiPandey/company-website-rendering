import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import url from "../../apiCall/data";
import styles from "./style.module.css"
function Surfboard(props) {
  let surfboard = props.surfboard[0];
  return (
    <div>
      <Head>
        <title>Surfboard</title>
      </Head>
      <div className={styles["header"]}>
        <h1>Surfboard</h1>
      </div>
      <div>
        <Link href="/raw-engineering">
          <a>Raw Engineering</a>
        </Link>
        <Link href="/contentstack">
          <a>Contentstack</a>
        </Link>
      </div>
      <div>
        <nav>
          <img src={surfboard.surfboardLogo} alt="" />
          <div>
            {surfboard.navigationLinks.map((link, i) => {
              return <p key={i}>{link}</p>;
            })}
          </div>
        </nav>
        <div>
          <h1>{surfboard.bannerHeading}</h1>
          <h3>{surfboard.bannerSubHeading}</h3>
        </div>
        <div>
          <img src={surfboard.portfolioImage} alt="" />
          {surfboard.companies.map((company, i) => {
            return (
              <div key={i}>
                <Link href={company.siteLink}>
                  <a>{company.companyName}</a>
                </Link>
                <p>{company.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          {surfboard.team.map((team, i) => {
            return (
              <div key={i}>
                <img src={team.image} alt="" />
                <p>{team.name}</p>
                <p>{team.message}</p>
              </div>
            );
          })}
        </div>
        <div>
          {surfboard.philosophy.map((philosophy, i) => {
            return (
              <div key={i}>
                <img src={philosophy.image} alt="" />
                <p>{philosophy.title}</p>
                <p>{philosophy.content}</p>
              </div>
            );
          })}
        </div>
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





