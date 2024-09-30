import React from "react";
import './Section6.css';

function section6(props){
    let data=props.data;
    return(
        <>
        {
            data.map((x)=>{
                return(
                   <section className="container section6">
                    <div className="container">
                        <div className="row d-flex gap-5 justify-content-center align-items-center">
                            <div className="col-sm-12 col-md-3 col-lg-2">
                                <img src={x.img1} alt="" />
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-2">
                                <img src={x.img2} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-2">
                                <img src={x.img3} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-2">
                                <img src={x.img6} alt="" className="img-fluid" />
                            </div>
                            <div className="col-sm-12 col-md-3 col-lg-2">
                                <img src={x.img5} alt="" className="img-fluid"/>
                            </div>
                           

                        </div>

                    </div>

                   </section>
                )
            })
        }
        </>

    )
}



export default section6