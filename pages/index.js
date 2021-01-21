import axios from "axios";
import url from "../apiCall/data";
import Link from "next/link";
//components
import HomeStyles  from "./style.module.css";
//function to render data on home page
function Home(props) {
  let home = props.home[0];
  console.log(home);
  return (
    <>
      <title>Home</title>
      {/* <h1>Home</h1> */}
      <div className={HomeStyles.container}>
        <h2>Talent wins games, but teamwork and intelligence win championships!!</h2>
        <h3>Explore more to know who we are...</h3>
        {/* <img src={home.backgroundImage}></img> */}
        <div className={HomeStyles.buttonContainer}>
          <Link href="/Contentstack">
            <button className={HomeStyles.button1}>Contentstack</button>
          </Link>
          <Link href="/Surfboard">
            <button className={HomeStyles.button2}>Surfboard</button>
          </Link>
          <Link href="/Raweng">
            <button className={HomeStyles.button1}>Raw Engineering</button>
          </Link>
        </div>
        <div className={HomeStyles.logoContainer}>
          {home.companies.map((company, i) => {
            return (
              <img
                src={company.logo}
                alt="company logo"
                className={HomeStyles.logoImg}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  let { data } = await axios.get(url + "home.json");
  return {
    props: {
      home: [...data],
    },
  };
};
export default Home;