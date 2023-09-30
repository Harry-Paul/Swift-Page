import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"


const Home = () => {
  const navigate = useNavigate();

  const fleet=()=>{
    navigate("/fleet");
  }


  return (
    <div>
      <div className='header'>
        <div className='nav1'>
          <p className='nav1-main'>WHY SWIFT TRANSPORT</p>
          <p onClick={fleet}>FLEET</p>
          <p>COMPANY POLICIES</p>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
        </div>
        <div className='nav2'>
          <p className='nav2-main'>Swift Intermodal</p>
          <p>Container Transport Solutions</p>
          <p>Complete Warehousing Solutions</p>
        </div>
      </div>
      <div className='Main'>
        <p className='Main1'>Why Swift Transport</p>
        <p>Here from our loyal customers about why</p> 
        <p>they're happy to recommend us to you</p>
      </div>
      <div className='p1'>
        <p className='p1a'>Home / Why Swift Transport</p>
        <div className='p1-box'>
          <div className='p1-box-left'>
            <p className='p1b'>Why Swift Transport</p>
            <p className='p1c'>Here from our loyal customers about why they’re happy to recommend us to you.</p>
            <p className='p1d'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <div className='p1-button'>Learn More</div>
          </div>
          <div className='p1-box-right'>
            <div className='box1'></div>
            <div className='box2'></div>
          </div>
        </div>
      </div>
      <div className='p2'>
        <div className='p2-left'>
          <p className='p2a'>Why Swift</p>
          <p className='p2b'>
            As a supplier we are a responsive business partner that can ensure quality and supply. We value strong relationships with our customers and believe that commercial relationships are a learnt skill.
          </p>
        <p className='p2b'>
        Our integrated supply chain helps us to ensure a high standard of product quality and service delivery. This reduces the potential need for rework, increases reliability of service and saves our customers time and money.
        </p>
        <p className='p2b'>
        Swift Transport is a market leader providing flexible, client-focused on demand transport and 3PL services complimented by industry leading technology.
        </p>
        <p className='p2b'>
        We offer solutions that simultaneously improve efficiencies, consistency, reliability and bottom line savings for our clients' businesses.
        </p>
        </div>
        <div className='p2-right'>

        </div>
      </div>
      <div className='p3'>
        <div className='comp'>
          <p className='p3a'>Case Studies</p>
          <div className='props'>
            <div className='prop1'></div>
            <iv className='prop2'></iv>
            <div className='prop3'></div>
          </div>
        </div>
        <div className='test'>
          <p className='p3b'>Testimonials</p>
          <div className='info'>
            <div className='img'></div>
            <p className='symbol'>"</p>
            <p className='quote'>We use <b>Swift Transport</b>  for a few different outcomes, relocate equipment between Sydney and the Central Coast and an Hourly Work as Directed Service. We simply make a call and the next day a driver in a fully equipped ute arrives ready for work. When we need to send items to Sydney that are planned, it works out far better to use Swift than use our own vehicles. The vehicles are well presented, well fitted and the drivers are all very helpful, and the rate is always excellent.</p>
          </div>
          <p className='p3c'>Peter Santwyk,</p>
          <p className='p3d'>Allcott Hire, Nth Regional Area Mgr</p>
        </div>
      </div>
      <div className='foot'>

      </div>
    </div>
  )
}

export default Home