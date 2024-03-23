import React from 'react'
import './styles/Home.css'
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import Morebooks from './Morebooks'


export default function Home() {



  return (
    
    <div className='container'>
      <div className="landimg">
        <img src="https://i.ibb.co/CJzbxwZ/1.png" alt="" 
        />
      
        <div className='part2'>
          <h1>Welcome To <br /> The <span>Revolution</span> of Literature</h1>

          <p className='p1'>
            Explore Boundless Worlds
          </p>

          <p className='p2'>
            Your All-in-One Destination for eBooks and More!
          </p>

          <div className='but2'>
            <Link to={"/ExploreBooks"}>
            <button>
              Explore Literary Treasures
            </button>
            </Link>       
          </div>
          

        </div>
      </div>

      

      <div className='part3'>
        <img src="https://i.ibb.co/CJzbxwZ/1.png" alt="" 
         />

          <h1><span className='span1'>THE BEST</span> stories are<br /> the ones <span className='span2'>YOU LOVE</span></h1>

          <p className='p1'>
            Thousands of new titles every month.
          </p>
          <p className='p2'>
            One convenient subscription.
          </p>

          <div className="but3">
            
              <Link to={"/Membership"}>
              <button>
              Unlock Exclusive Benefits
              </button>
              </Link>
              
            
          </div>
          

      </div>



      <div className='part4'>
        <h1>Featured <span>Today</span></h1>
        <img src="https://i.ibb.co/CJzbxwZ/1.png" alt="" 
         />
        <div className='part41'>

          <div className='but4'>
          <a href="#"><button>
            More Books
          </button></a>
          </div>
      
          <h1>Read <span className='span1'>What You Want</span><br /> How You Want</h1>

          <p className='p1'>
          Carry Your Library Everywhere <br />
          Download Books for Offline Enjoyment!  
          </p>


        <div className="but4">
          <a href="#"><button>
            Purchase Books
          </button></a>
        </div>
          
        </div>
          

      </div>
    </div>
  )
}
