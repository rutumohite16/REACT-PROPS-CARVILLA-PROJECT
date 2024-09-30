import React from "react";
import './Section4.css';

function section4(props){

    let data=props.data;
    return(
        <>
        {
            data.map((x)=>{
                return(
                    <section className="container-fluid section4">
                        <div className="container">
                           <div className="text-center mt-5">
                        <h5 className=" cars">{x.h3}</h5>
                           <h1 className="mb-5">{x.h1}</h1>
                           </div>
                           <div>
                            <div className="row">
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5 ">
                                <img src={x.i1} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p className="fs-5 price">{x.h10}</p>
                                <p className="price">{x.h4}</p>
                                <p>{x.h5}</p>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5 ">
                                <img src={x.i2} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p className="fs-5 price">{x.h6}</p>
                                <p className="price">{x.h7}</p>
                                <p>{x.h5}</p>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                                <img src={x.i3} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p  className="fs-5 price" >{x.h11}</p>
                                <p className="price">{x.h8}</p>
                                <p>{x.h5}</p>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                                <img src={x.i4} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p  className="fs-5 price">{x.h12}</p>
                                <p className="price">{x.h9}</p>
                                <p>{x.h5}</p>
                             </div>

                            </div>
                            <div className="row mt-5">
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5 ">
                                <img src={x.i5} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p  className="fs-5 price">{x.h13}</p>
                                < p className="price">{x.h17}</p>
                                <p>{x.h5}</p>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5 ">
                                <img src={x.i6} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p  className="fs-5 price">{x.h14}</p>
                                <p className="price">{x.h18}</p>
                                <p>{x.h5}</p>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                                <img src={x.i7} alt="" className="mb-5 img-fluid" />
                                <p>{x.h2}</p>
                                <p  className="fs-5 price">{x.h15}</p>
                                <p className="price">{x.h19}</p>
                                <p>{x.h5}</p>
                             </div>
                             <div className="col-sm-12 col-md-6 col-lg-3 mt-5">
                                <img src={x.i8} alt="" className="mb-5  img-fluid" />
                                <p >{x.h2}</p>
                                <p  className="fs-5 price">{x.h16}</p>
                                <p className="price">{x.h20}</p>
                                <p>{x.h5}</p>
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


export default section4