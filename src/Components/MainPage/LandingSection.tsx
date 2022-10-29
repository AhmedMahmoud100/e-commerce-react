import data from '../../data/Landing.json'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function LandingSection() {
     const [item, setitem] = useState(0);

     function Drag(e: React.MouseEvent) {
          e.target.addEventListener("dragend", function (event: any) {
               let Offset = event.offsetX
               if (Offset > 0 && item < 3) {
                    setitem(item + 1)
               } else if (Offset < 0 && item > 0) {
                    setitem(item - 1)
               }
          })
     }
     return (
          <section className='cardSection container' onDragStart={Drag} >
               <section className='cardSlider' style={{ transform: `translateX(${item * -100}%)` }}  >
                    {data.map(e => {
                         return <article key={e.id} >
                              <section >
                                   <h2>50% off for your first shopping</h2>
                                   <span>  labore ncidunt officiis delectus explicabo necessitatibus impedit, magnam autem et. Saepe totam laudantium error expedita dignissimos.</span>
                                   <Link to='/deals'><button>Visit Collection</button></Link>
                              </section>
                              <img src={e.src} key={e.id}></img>
                         </article>
                    })}
               </section>
               <ul className='cardFooter'>
                    <li onClick={() => setitem(0)}></li>
                    <li onClick={() => setitem(1)}></li>
                    <li onClick={() => setitem(2)}></li>
                    <li onClick={() => setitem(3)}></li>
               </ul>
          </section>
     )
}
