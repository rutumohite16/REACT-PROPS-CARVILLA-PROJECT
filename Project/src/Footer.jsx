import React from "react";
import './Footer.css';

function footer(props) {
    let data = props.data;
    return (
        <>
            {
                data.map((x) => {
                    return (
                        <section className="container-fluid footer">
                            <div className="container ">
                                <div className="row foot">
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <h2 className="mt-5 mb-5">{x.h2}</h2>
                                        <p className="mb-4">{x.p}</p>
                                        <p>{x.p1}</p>
                                        <p>{x.p11}</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <h3 className="mb-5 mt-5">{x.h4}</h3>
                                        <div className="mb-3">
                                        <a href="#">{x.A1}</a> <br />
                                        </div>
                                       <div className="mb-3">
                                       <a href="#">{x.A2}</a> <br />
                                       </div>
                                       <div className="mb-3">
                                       <a href="#">{x.A3}</a> <br />
                                       </div>
                                       <div className="mb-3">
                                       <a href="#">{x.A4}</a>
                                       </div>
                                    </div >
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <div className="row">
                                            <div className="col-12">
                                                <h3 className="mb-5 mt-5">{x.h5}</h3>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#" className="pb-5">{x.A5}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                            <a href="#" className="pb-5">{x.A6}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A7}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A8}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A9}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A10}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A11}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A12}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A13}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A14}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A15}</a>
                                            </div>
                                            <div className="col-5 mb-3">
                                                <a href="#">{x.A16}</a>
                                            </div>
                                         </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3">
                                        <h3 className="mb-5 mt-5">{x.h6}</h3>
                                        <p>{x.p2}</p>
                                       <input type="text" placeholder="Add Email" className="mt-4" />
                                    </div>

                                </div>

                            </div>

                        </section>
                        // <section className="container-fluid  footer">
                        //     <div >
                        //         <div className="d-flex justify-content-space-evenly mt-5">
                        //             <div className="mt-5 justify-content-space-evenly align-items-center" >
                        //                 <h2>{x.h2}</h2>
                        //                 <p>{x.p}</p>
                        //                 <p>{x.p1}</p>
                        //                 <p>{x.p11}</p>
                        //             </div>
                        //             <div className="mt-5">
                        //                 <h5>{x.h4}</h5>
                        //                 <p>{x.A1}</p>
                        //                 <p>{x.A2}</p>
                        //                 <p>{x.A3}</p>
                        //                 <p>{x.A4}</p>
                        //             </div>
                        //             <div className="mt-5">
                        //                 <h5>{x.h5}</h5>
                        //                 <p>{x.A5}</p>
                        //                 <p>{x.A6}</p>
                        //                 <p>{x.A7}</p>
                        //                 <p>{x.A8}</p>
                        //                 <p>{x.A9}</p>
                        //                 <p>{x.A10}</p>
                        //             </div>
                        //             <div className="mt-5">
                        //                 <p>{x.A11}</p>
                        //                 <p>{x.A12}</p>
                        //                 <p>{x.A13}</p>
                        //                 <p>{x.A14}</p>
                        //                 <p>{x.A15}</p>
                        //                 <p>{x.A16}</p>
                        //             </div>
                        //             <div className="mt-5">
                        //                 <h5>{x.h5}</h5>
                        //                 <p>{x.p2}</p>
                        //                 <input type="text" placeholder="Add Email" />
                        //             </div>
                        //         </div>

                        //     </div>

                        // </section>
                    )
                })
            }
        </>
    )
}

export default footer

