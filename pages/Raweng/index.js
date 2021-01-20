import Link from "next/link";
import axios from "axios";
import url from "../../apiCall/data";
function RawEngineering (props) {
  let rawengineering = props.rawengineering[0];
  console.log(rawengineering);
  return (
    <>
      <title>Rawengineering</title>
      <div id = "main-container" >
        {/* navigation bar */}
        <nav>
          <img src={rawengineering.rawengineeringLogo} alt="" />
          <div>
            {rawengineering.navigationLinks.map((link, i) => {
              return <p key={i}>{link}</p>;
            })}
          </div>
        </nav>
        {/* banner */}
        <div>
          <h1>{rawengineering.title}</h1>
          <h3>{rawengineering.subtitle}</h3>
          <p>{rawengineering.shortIntro}</p>
           <button>LEARN MORE</button>
          {/* <p>Request a Demo</p> */} 
        </div>
        <div>
          <h1>What we do?</h1>
          {rawengineering.whatWeDo.map((whatWeDo, i) => {
            return (
              <div key={i}>
                <img src={whatWeDo.imageUrl} alt=""/>
                <h3>{whatWeDo.heading}</h3>
                <p>{whatWeDo.subHeading}</p>
              </div>
            );
          })}
        </div>
        <div>
            <h1>LATEST WORK</h1>
            {rawengineering.latestWork.map((latestWork, i)=>{
             return(
                 <div key ={i}>
             <img src={latestWork.imageUrl} alt=""/>
             <h3>{latestWork.title}</h3>
             <h4>{latestWork.caseStudyHeading}</h4>
             </div>
             );
            })}
            </div>
            <div>
            <h1>TESTIMONIALS</h1>
            {rawengineering.testimonials.map((testimonials, i)=>{
             return(
                 <div key ={i}>
             <img src={testimonials.imageUrl} alt=""/>
             <h3>{testimonials.name}</h3>
             <h3>{testimonials.companyName}</h3>
             <h4>{testimonials.message}</h4>
             </div>
             );
            })}
            </div>
        <hr />
        {/* <div>
          {contentstack.footer.map((footerLinks, i) => {
            return <li key={i}>{footerLinks}</li>;
          })}
        </div> */}
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



