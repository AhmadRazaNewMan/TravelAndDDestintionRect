import {React ,useEffect}from 'react';
import './Footer.css';
import { FiSend ,FiChevronRight} from 'react-icons/fi';
import video from '../assets/Video2.mp4';
import {MdOutlineTravelExplore}  from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>
  {
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        
        <video src={video} muted autoPlay loop type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div  data-aos = "fade-up" className="text">
            <small>
              KEEP IN TOUCH
            </small>
            <h2>
              Travel With Us
            </h2>
          </div>
          <div className="inputDiv flex">
            <input  data-aos = "fade-up" type="email" placeholder='Enter The Email' />
            <button  data-aos = "fade-up" className='btn flex' type='submit'>
               SEND<FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
            <div className="footerIntro flex">
                <div className="logoDiv">
                    <a href="" className='logo flex'>
                        <MdOutlineTravelExplore className="icon"/>Travel
                    </a>
                </div>
                <div  data-aos = "fade-up" className="footerParagraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Perferendis reiciendis doloribus odit ducimus, vel itaque facere
                     , dolorum quibusdam earum architecto a. Odit,
                     maxime nemo? Culpa, iure! Labore omnis repellendus laudantium!
                </div>
                <div   data-aos = "fade-up" className="footerSocials flex">
                    <AiOutlineTwitter className='icon'/>
                    <AiFillYoutube className='icon'/>
                    <AiFillInstagram className='icon'/>
                    <FaTripadvisor className='icon'/>

                    

                </div>


            </div>
           <div className="footerLinks grid">

            <div  data-aos = "fade-up" data-aos-duration = "3000" className="linkGroup">
                <span className="groupTitle">
                   OUR AGENCY
                </span>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Services
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                 Payment
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Tourism
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Agency
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Insurance
                </li>
                
            </div>


            <div  data-aos = "fade-up" data-aos-duration = "4000" className="linkGroup">
                <span className="groupTitle">
                 PARTENERS
                </span>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                   Booking
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                 Rent Cars
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Hostel World
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                    Trivago
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                TripAdvisor
                </li>
                
            </div>



            <div  
            data-aos = "fade-up"
            data-aos-duration = "5000"
             className="linkGroup">
                <span className="groupTitle">
                 LAST MINUTE
                </span>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                  London 
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                California
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                   Indonesia
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                   Switzerland
                </li>
                <li className="footerList flex">
                    <FiChevronRight className='icon'/>
                 Miami Beach
                </li>
                
            </div>
         
         <div className="footerDiv flex">
            <small>PERSONAL WEBSITE THEME  </small>
            <small> COPYRIGHTS RESERVED -  ARDEV&TECH 2023  </small>
         </div>

            
            


           </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
