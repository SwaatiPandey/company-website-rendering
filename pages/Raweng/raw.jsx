import Head from "next/head";
import axios from "axios";
import companyUrl from "../../constants";
import styles from "./index.module.css";
function RawEngineering(props) {
  let rawEngineering = props.rawEngineering[0];
  return (
    <div>
      <Head>
        <title>Raw Engineering</title>
      </Head>
      <div>
        <div className={styles["header"]}>
          <nav className={styles["navigation"]}>
            <img
              className={styles["company-logo"]}
              src={rawEngineering.rawEngineeringLogo}
              alt="Logo"
            />
            <div className={styles["nav-links"]}>
              {rawEngineering.navigationLinks.map((link, i) => {
                return (
                  <p className={styles["nav-item"]} key={i}>
                    {link}
                  </p>
                );
              })}
            </div>
          </nav>
          <div className={styles["banner-text"]}>
            <p className={styles["banner-title"]}>{rawEngineering.title}</p>
            <p className={styles["banner-subtitle"]}>{rawEngineering.subtitle}</p>
          </div>
        </div>
        <img src={rawEngineering.bannerImage} alt="Banner" />
        <p>{rawEngineering.shortIntro}</p>
      </div>
      <div>
        {rawEngineering.whatWeDo.map((task, i) => {
          return (
            <div key={i}>
              <img src={task.imageUrl} alt="" />
              <p>{task.heading}</p>
              <p>{task.subHeading}</p>
            </div>
          );
        })}
      </div>
      <div>
        {rawEngineering.latestWork.map((work, i) => {
          return (
            <div key={i}>
              <img src={work.imageUrl} alt="Work" />
              <p>{work.caseStudyHeading}</p>
              <p>{work.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        {rawEngineering.testimonials.map((testimony, i) => {
          return (
            <div key={i}>
              <img src={testimony.imageUrl} alt="Testimony" />
              <p>{testimony.name}</p>
              <p>{testimony.companyName}</p>
              <p>{testimony.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(companyUrl + "raw-engineering.json");
  return {
    props: {
      rawEngineering: [...data],
    },
  };
};
export default RawEngineering;