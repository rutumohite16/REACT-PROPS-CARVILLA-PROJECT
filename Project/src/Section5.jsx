import React from "react";
import './Section5.css';

function section5(props){
   let data=props.data;
    return(
        <>
        {
            data.map((x)=>{
                return(
                    <section className="container-fluid section5">
                        <div className="container">
                            <div>
                                <div className="text-center ">
                                    <h1 className="what">{x.h1}</h1>
                                </div>
                            </div>
                            <div>
                                <div className="row text-center mt-5 d-flex gap-5 justify-content-center align-items-center what2">
                                    <div className="col-sm-12 col-md-6 col-lg-3 client">
                                        <img src={x.img1} alt="" className="mb-4 mt-5"/>
                                        <p>{x.p}</p>
                                        <p className="name">{x.p3}</p>
                                        <p className="name">{x.p2}</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3 client">
                                        <img src={x.img2} alt="" className="mb-4 mt-5"/>
                                        <p>{x.p}</p>
                                        <p className="name">{x.p1}</p>
                                        <p className="name">{x.p4}</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3 client">
                                        <img src={x.img3} alt="" className="mb-4 mt-5"/>
                                        <p>{x.p}</p>
                                        <p className="name">{x.p5}</p>
                                        <p className="name">{x.p6}</p>
                                    </div>

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

export default section5