import React from 'react'
import Bookcards from './../bookcards.json'
import './Css/Cards.css'

export default function Cards() {
  return (
    <div>

  {
    Bookcards && Bookcards.map((bookcards) => {
      return (
        <div className="card-container">
            <div className="card" key={ bookcards.id }>
                <div className="book-image">
                  <img src={ bookcards.icon } alt=""/>
                </div>
 
                <div className="book-content">
                  <h2 className='title'>{ bookcards.title } </h2>
                <p className='description'>{ bookcards.content } </p> 
                </div>
                  <a href="https://img.freepik.com/free-vector/anemone-flower-collage-element-black-botanical-clipart-vector_53876-156550.jpg?w=826&t=st=1711172386~exp=1711172986~hmac=f74f3ba51a03f5a86a9c407681c4fefef1b18832e8a76d533c23d3b2b36d933f">
                    <button>
                        view more
                    </button>  
                  </a>
                                 
                  
             </div>
        </div>
        
      )
    })
  }

    </div>
  )
}
