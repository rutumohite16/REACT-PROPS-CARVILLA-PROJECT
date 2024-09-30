import React from "react";
import './Nav.css';


function Nav(props) {
    let data = props.data;
    return (
        <>
            {
                data.map((x) => {
                    return (
                        <section className="container-fluid pt-4 pb-4 nav-section">
                            <div className="container d-flex justify-content-between">
                                 <div >
                                    <a href="#" className="anchor">{x.h1}</a>
                                </div>
                                <div className="d-flex align-items-center d-none d-md-none d-lg-block">
                                    <ul className="d-flex m-0 ">
                                        <li className="me-5"><a href="#">{x.p1}</a></li>
                                        <li className="me-5"><a href="#">{x.p2}</a></li>
                                        <li className="me-5"><a href="#">{x.p3}</a></li>
                                        <li className="me-5"><a href="#">{x.p4}</a></li>
                                        <li className="me-5"><a href="#">{x.p5}</a></li>
                                        <li className="me-5"><a href="#">{x.p6}</a></li>
                                    </ul>

                                </div>
                                <div class="offcanvas offcanvas-start" id="demo" >
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title">my first offcanvas</h5>
                                        <button class="btn btn-close" data-bs-dismiss="offcanvas"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                    <nav>
                                            <ul>
                                                <li>Home</li>
                                                <li>Services</li>
                                                <li>Featured Cars</li>
                                                <li>New Cars</li>
                                                <li>Brands</li>
                                                <li>Contact</li>
                                            </ul>
                                    </nav>
                                </div>
                                </div>
                                <div class="d-lg-none ">
                                    <button type="button" class="nav-btn" data-bs-toggle="offcanvas" data-bs-target="#demo"><i class="fa-solid fa-bars"></i></button>
                                </div>
                            </div>



                        </section>
                    )
                })
            }
        </>

    )
}


export default Nav