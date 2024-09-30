import React from "react";
import './Section1.css';

function section1(props){
    let data=props.data;
    return(
        <>
        {
            data.map((x)=>{
                return(
                    <section className="section1 container-fluid text-white ">
                        <div className="container">
                            <div className="container align-items-center">
                               <h1 className="mb-5  start">{x.h1}</h1>
                               <p className="fs-4">{x.p}</p>
                               <p className="fs-4 mb-5">{x.p1}</p>
                               <button className="text-white bg-info btn">{x.btn}</button>
                            </div>

                        </div>

                    </section>
                )
            })
        }
        </>
    )
}




export default section1