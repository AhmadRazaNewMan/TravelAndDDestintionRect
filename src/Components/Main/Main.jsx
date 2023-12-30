import {React,useEffect} from 'react'
import image from '../assets/image1.jpg'
import './Main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    imgSrc:image,
    id:1,
    name:"John Doe",
    desTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"l132refe f nelnrnlf fkl lkn lfdfddfdfddfd  fdfd f ffknlke fnelnfeflelflew ewflflb ddbqlwdlqwldwk dwd",

  },
  { imgSrc:image,
    id:1,
    name:"John Doe",
    desTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"l132refe f nelnrnlf fkl lkn lfdfddfdfddfd  fdfd f ffknlke fnelnfeflelflew ewflflb ddbqlwdlqwldwk dwd",
    
  }
  ,
  { imgSrc:image,
    id:1,
    name:"John Doe",
    desTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"l132refe f nelnrnlf fkl lkn lfdfddfdfddfd  fdfd f ffknlke fnelnfeflelflew ewflflb ddbqlwdlqwldwk dwd",

  },
  { imgSrc:image,
    id:1,
    name:"John Doe",
    desTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"l132refe f nelnrnlf fkl lkn lfdfddfdfddfd  fdfd f ffknlke fnelnfeflelflew ewflflb ddbqlwdlqwldwk dwd",

  },
  { imgSrc:image,
    id:1,
    name:"John Doe",
    desTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"l132refe f nelnrnlf fkl lkn lfdfddfdfddfd  fdfd f ffknlke fnelnfeflelflew ewflflb ddbqlwdlqwldwk dwd",

  },
  { imgSrc:image,
    id:1,
    name:"John Doe",
    desTitle:"Bora Bora",
    location:"New Zealand",
    grade:"CULTURAL RELAX",
    fees:"$700",
    description:"l132refe f nelnrnlf fkl lkn lfdfddfdfddfd  fdfd f ffknlke fnelnfeflelflew ewflflb ddbqlwdlqwldwk dwd",

  }
]
const Main = () => {
  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])
  return (
   
    <section className='container main section '>
      <div className="secTitle">
        <h3 data-aos = "fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({ id, description, fees, grade, location, desTitle, name, imgSrc }) => {
            return (
             
                <div key={id} data-aos = "fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle}/>
                </div>
                <div className="cardInfo">
                  <h4 className={desTitle}>
                    {desTitle}
                  </h4>

                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>Details<HiOutlineClipboardCheck className='icon'/></button>
                 
           
              </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};
export default Main;