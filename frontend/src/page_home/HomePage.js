import { Component } from "react";

import FHeader from "../components/FHeader.js";
import FFooter from "../components/FFooter.js";
import FTagList from "../components/FTagList.js";

import RsrcIconArrowLeft from "../resources/icon_arrow_left.svg";
import RsrcIconArrowRight from "../resources/icon_arrow_right.svg";
import RsrcIconHeart from "../resources/icon_heart.svg";
import RsrcIconVomit from "../resources/icon_vomit.svg";

class HomePage extends Component
{
  
  componentDidMount()
  {
    document.title = "Filmer: Home";
  }

  render()
  {
    const title     = "Interstellar";
    const overview  = "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.";
    const tags      = ["Sci-Fi", "Adventure", "Drama"];
    const video     = "https://www.youtube.com/embed/zSWdZVtXT7E";
    const likes     = 10293;
    const dislikes  = 2301;
    const directors = ["Chistopher Nolan"];
    const writers   = ["Christopher Nolan", "Jonathan Nolan"];
    const starring  = ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"];
   
    const directors_rendered = directors.map((element) => <p className="m-0 p-0">{element}</p>);
    const writers_rendered   = writers.map((element) => <p className="m-0 p-0">{element}</p>);
    const starring_rendered  = starring.map((element) => <p className="m-0 p-0">{element}</p>);

    return(
<div className="h-100 d-flex flex-column p-3">
    <FHeader/> 
    <main className="mt-auto mb-1 container-fluid">
        <div className="mb-5 d-flex justify-content-around align-items-center">
            <div className="col d-none d-xl-flex justify-content-center">
               <img src={RsrcIconArrowLeft} width="32px" className="me-3" alt=""/> 
               <img src={RsrcIconHeart} width="32px" alt=""/> 
            </div>
            <div className="col-xl-7">
                <div className="d-flex mb-5 justify-content-center">
                    <div className="d-xl-none d-flex me-4">
                       <img src={RsrcIconArrowLeft} width="28px" className="me-3" alt=""/> 
                       <img src={RsrcIconHeart} width="28px" alt=""/> 
                    </div>
                    <div className="d-xl-none d-flex">
                       <img src={RsrcIconVomit} width="28px" className="me-3" alt=""/> 
                       <img src={RsrcIconArrowRight} width="28px" alt=""/> 
                    </div>
                </div>
                <p className="mb-3 ffs-1 ffw-2 m-0 p-0">{title}</p>
                <FTagList tags={tags}/>
                <p className="my-3">{overview}</p>
                <div className="d-xl-flex">
                    <div className="col me-3">
                        <div className="ratio ratio-16x9">
                            <iframe src={video} title="title"/>
                        </div>
                        <div className="d-flex mt-3 mb-5">
                            <div className="d-flex me-4">
                                <img src={RsrcIconHeart} width="32px" className="me-2" alt=""/>
                                <label className="ffs-2">{likes}</label> 
                            </div>
                            <div className="d-flex me-4">
                                <img src={RsrcIconVomit} width="32px" className="me-2" alt=""/>
                                <label className="ffs-2">{dislikes}</label> 
                            </div>
                        </div>
                    </div>
                    <div className="d-sm-flex d-xl-block justify-content-around ffw-2">
                        <div className="">
                            <p className="m-0 p-0 mt-3 mb-1 rgb-2">Director</p>
                            {directors_rendered}
                        </div>
                        <div className="">
                            <p className="m-0 p-0 mt-3 mb-1 rgb-2">Writer</p>
                            {writers_rendered}
                        </div>
                        <div className="">
                            <p className="m-0 p-0 mt-3 mb-1 rgb-2">Starring</p>
                            {starring_rendered}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col d-none d-xl-flex justify-content-center">
               <img src={RsrcIconVomit} width="32px" className="me-3" alt=""/> 
               <img src={RsrcIconArrowRight} width="32px" alt=""/> 
            </div>
        </div>
    </main>
    <FFooter/>
</div>
    ); 
  }


}

export default HomePage;
