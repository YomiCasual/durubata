import Link from 'next/link';
import PageBanner from "../../../components/Common/PageBanner";
import MoreProjects from "../../../components/PortfolioDetails/MoreProjects";
import PortfolioSidebar from "../../../components/PortfolioDetails/PortfolioSidebar";
import Footer from "../../../components/_App/Footer";
import NavbarStyleTwo from "../../../components/_App/NavbarStyleTwo";
import { portfolios } from '../../../data/index';



const SingleCaseStudy = ({caseStudy,otherCaseStudies}) => {
    const { image = '', subtitle = '', title = '', desc = ''} = caseStudy;
    return (
        <>
			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle={`${title}`}
            />  

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="portfolio-details-image">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <img src={image} alt="image" />
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <img src={image} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <PortfolioSidebar />
                        </div>

                        <div className="portfolio-details-desc">
                                <span className="sub-title">{subtitle}</span>
                                <h3>Buidling a {title} for a satisified client</h3>
                                <p>{desc}</p>

                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="image">
                                            <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                    <h3>Process</h3>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>

<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
<h3>Results</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.</p>
</div>
                                        </div>
                                </div>

                               
                    </div>
                </div>
            </div>

            <OtherCaseStudies otherCaseStudies={otherCaseStudies} />

			<Footer />
		</>
    )
}




export default SingleCaseStudy;


const OtherCaseStudies =({otherCaseStudies}) => (
   
    <div className="portfolio-area pb-70">
    <div className="container">
        <div className="section-title">
            <h2>More Projects You Might Like</h2>
        </div>

        <div className="row">
            {
                otherCaseStudies.map(({id, image = '', subtitle = '', title = '', desc = ''}) => (


            <div id={id} className="col-lg-4 col-md-6">
                 <div className="single-portfolio-item" key={id}>
                        <Link href={`/case-studies/${id}`}>
                            <a className="image d-block">
                                <img src={image} alt="image" />
                            </a>
                        </Link>

                        <div className="content">
                        <p className="subtitle">{subtitle}</p>
                            <h3>
                                <Link href="/case-studies">
                                    <a>{title}</a>
                                </Link>
                            </h3>
                        <p className="desc">{desc}</p>

                        <Link href={`/case-studies/${id}`}>
                                <a className="link-btn"><i className="flaticon-next-button"></i></a>
                            </Link>
                        </div>
                    </div>

            </div>
                ))
            }

            </div>
            </div>
            </div>

)


export const getStaticPaths = async () => {
    return {
      paths: [], //indicates that no page needs be created at build time
      fallback: "blocking", //indicates the type of fallback
    };
  };
  

export async function getStaticProps(context) {

    let mockData = portfolios.find(
      (item) => item.id == context.params.id
    );
    let otherCaseStudies = portfolios.filter(portfolio  => portfolio.id != context.params.id)
    //   const mockData = IndustriesData;
    if (!mockData) {
      mockData = {};
    }
  
    return {
      props: {
        caseStudy: mockData,
        otherCaseStudies
      },
    };
  }
  