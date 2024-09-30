import React from "react";
import './section2.css';
 
function Section2(props) {

     let data2=props.data2
     
return(
    <>
    {
        data2.map((x)=>{
            return(
                <section className="container-fluid section2">
                    <div className="container">
                    <div className="row justify-content-center text-center d-flex gap-md-4 gap-lg-5">
                        <div className="col-sm-12 col-md-4 col-lg-3 items "> 
                             <p className="icon"><i class="fa-solid fa-car-rear"></i></p>
                            <p className="fs-5 fw-5">{x.h2}</p>
                            <p className="items2">{x.h3}</p>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 items"> 
                            <p className="icon"><i class="fa-solid fa-screwdriver-wrench"></i></p>
                            <p className="fs-5 fw-5">{x.h4}</p>
                            <p className="items2">{x.h3}</p>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 items"> 
                            <p className="icon"><i class="fa-solid fa-car-burst"></i></p>
                            <p className="fs-5 fw-5">{x.h5}</p>
                            <p className="items2">{x.h3}</p>
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


export default Section2