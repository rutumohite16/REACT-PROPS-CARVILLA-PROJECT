import React from 'react'
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Footer from './Footer'







function App() {


  let nav=[
    {
      h1:"CARVILLA",
      p1:"HOME",
      p2:"SERVICES",
      p3:"FEATURED CARS",
      p4:"NEW CARS",
      p5:"BRANDS",
      p6:"CONTACT"
    }
  ]

  let section1=[
    {
      h1:"GET YOUR DESIRED CAR IN REASONABLE PRICE",
      p:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
      p1:"incididunt ut labore et dolore magna aliqua",
      btn:"Contact Us",
    }
  ]
  
//  section2

 let section2=[
  {
    img:"",
    h2:"largest dealership of Cars",
    h3:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.",
    h4:"Unlimited Repair Warrenty",
    h5:"Insurence Support"
  }
  
 ]


  // section3

  let section3=[
    {
      p: "checkout the latest cars",
      h1:"Newest Cars",
      img: "assets/images/new-cars-model/ncm2.png",
      h2:"BMW series-3 wagon",
      p2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      p3: "Sed ut pers unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      btn: "View Details"
    }
  ]

  //  Section4

   let section4=[
    {
      h3:"checkout the featured cars",
      h1:"featured cars",
      i1:"assets/images/featured-cars/fc1.png",
      i2:"assets/images/featured-cars/fc2.png",
      i4:"assets/images/featured-cars/fc4.png",
      i3:"assets/images/featured-cars/fc3.png",
      i5:"assets/images/featured-cars/fc5.png",
      i6:"assets/images/featured-cars/fc6.png",
      i7:"assets/images/featured-cars/fc7.png",
      i8:"assets/images/featured-cars/fc8.png",
      h2:"model: 2017  3100 mi  240HP  automatic",
      h10:"BMW 6-series gran coupe",
      h11:"lamborghini v520",
      h12:"audi a3 sedan",
      h13:"infiniti z5",
      h14:"porsche 718 cayman",
      h15:"bmw 8-series coupe",
      h16:"BMW xseries-6",
      h4:"$89,395",
      h5:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
      h6:"chevrolet camaro wmv20",
      h7:"$66,575",
      h8:"$125,250",
      h9:"$95,500",
      h17:"$36,850",
      h18:"$48,500",
      h19:"$56,000",
      h20:"$75,800"

    }
   ]

  //  Section5

   let section5=[
    {
      h1:"what our clients say",
      p:"Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
      p1:"Romi Rain",
      p2:"London",
      p3:"John Doe",
      p4:"Washington",
      p5:"Tomas Lili",
      p6:"New York",
      img1:"assets/images/clients/c1.png",
      img2:"assets/images/clients/c2.png",
      img3:"assets/images/clients/c3.png",
    }
   ]

  //  Section6
  
   let section6=[
    {
      img1:"assets/images/brand/br1.png",
      img2:"assets/images/brand/br2.png",
      img3:"assets/images/brand/br3.png",
      img4:"assets/images/brand/br4.png",
      img5:"assets/images/brand/br5.png",
      img6:"assets/images/brand/br6.png"
    
    }
   ]

  //  footer
    let footer=[
      {
        h2:"carvilla",
        p:"Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.",
        p1:"info@themesine.com",
        p11:"+1 (885) 2563154554",
        h4:"about devloon",
        A1:"about Us",
        A2:"career",
        A3:"terms of service",
        A4:"privacy policy",
        h5:"top brands",
        A5:"BMW",
        A6:"Lamborghini",
        A7:"camaro",
        A8:"audi",
        A9:"infiniti",
        A10:"nissan",
        A11:"ferrari",
        A12:"porsche",
        A13:"land rover",
        A14:"aston martin",
        A15:"mersedes",
        A16:"opel",
        h6:"news letter",
        p2:"Subscribe to get latest news update and informations",
        btn:"Add Email"

      }
    ]




  return (
    <> 
      <Nav data={nav}></Nav>
      <Section1 data={section1}></Section1>
      <Section2 data2={section2}></Section2>
      <Section3 data={section3}></Section3>
      <Section4 data={section4}></Section4>
      <Section5 data={section5}></Section5>
      <Section6 data={section6}></Section6>
      <Footer data={footer}></Footer>
     </>
  )
}

export default App
