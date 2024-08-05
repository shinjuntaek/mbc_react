import React from "react";

import port01 from "../assets/img/mbc_prot01_code_99.png";
import port02 from "../assets/img/mbc_prot02_eof.png";
import port03 from "../assets/img/mbc_prot03__joteam.png";
import port04 from "../assets/img/mbc_prot04__scoops.png";
import port05 from "../assets/img/mbc_prot05_tamyok.png";

const portText =[
  {
      num:"01",
      title:"코드 99",
      img: port01,
      img_alt:"코드99", 
      desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
      site:"http://tnwjd3887.dothome.co.kr/port1_5",
  },
  {
    num:"02",
    title:"E.O.F",
    img: port02,
    img_alt:"E.O.F", 
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
    site:"http://tjsdudis.dothome.co.kr/team",
  },
  {
    num:"03",
    title:"DOPAMINE",
    img: port03,
    img_alt:"조현호와 아이들", 
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
    site:"http://tlswnsxor.dothome.co.kr/joteam/",
  },
  {
    num:"04",
    title:"scoops",
    img: port04,
    img_alt:"scoops", 
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
    site:"http://mieum0915.dothome.co.kr/scoops/",
  },
  {
    num:"05",
    title:"탐욕",
    img: port05,
    img_alt:"탐욕", 
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
    site:"http://ds1djs.dothome.co.kr/mainpage",
  },
  {
    num:"06",
    title:"코드 99",
    img: port01,
    img_alt:"코드99", 
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
    site:"http://tnwjd3887.dothome.co.kr/port1_5",
},
{
  num:"07",
  title:"E.O.F",
  img: port02,
  img_alt:"E.O.F", 
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
  site:"http://tjsdudis.dothome.co.kr/team",
},
{
  num:"08",
  title:"DOPAMINE",
  img: port03,
  img_alt:"조현호와 아이들", 
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
  site:"http://tlswnsxor.dothome.co.kr/joteam/",
},
{
  num:"09",
  title:"scoops",
  img: port04,
  img_alt:"scoops", 
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
  site:"http://mieum0915.dothome.co.kr/scoops/",
},
{
  num:"10",
  title:"탐욕",
  img: port05,
  img_alt:"탐욕", 
  desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, harum? Voluptatibus odio, harum quae minus eaque doloribus corporis voluptas voluptatum, ratione nobis officiis assumenda natus! Vitae officia quidem ullam facere?",
  site:"http://ds1djs.dothome.co.kr/mainpage",
},
  
]

const Port = () => {
  return <section id="port">
    <div className="port_inner">
      <div className="port_title">
        portfolio <em>나의 작품들</em>
      </div>
      <div className="port_wrap">
        {portText.map((port,key)=>(

           <div className={`port_item s${key+1}`} key={key}>
           <span className="num">{port.num}</span>
           <a href={port.site} className="img">
             <img src={port.img} alt={port.img_alt} />
           </a>
           <h3 className="title">{port.title}</h3>
           <p className="desc">
           {port.desc}
           </p>
           <a href={port.site} className="site">바로가기</a>
         </div>

        ))}
       


      </div>
    </div>
  </section>;
};

export default Port;
