import React from "react";
import './Section3.css';


function Section3(props) {

    let data = props.data;


    return (
        <>

            {
                data.map((x) => {
                    return (
                        <section className="container-fluid text-center pt-5  pb-5 section3">
                            <div className="row mb-5">
                                <div className="col-12">
                                    <p className="text1">{x.p}</p>
                                    <h1>{x.h1}</h1>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row cars ">
                                    <div className=" col-12 col-lg-7">
                                        <div>
                                            <img src={x.img} alt="" className="img-fluid mb-5 " />
                                        </div>

                                    </div>
                                    <div className="col-lg-5 col-12 d-flex justify-content-center  justify-content-lg-start text-start text">
                                        <div>
                                            <h2 className="mb-4 text-dark">{x.h2}</h2>
                                            <p className="mb-4">{x.p2}</p>
                                            <p className="mb-4">{x.p3}</p>
                                            <button className="btn  pt-3 pb-5 ps-5 pe-5 text-light bg-info">{x.btn}</button>
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




export default Section3