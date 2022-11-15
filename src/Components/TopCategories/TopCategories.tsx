import { useState } from 'react'
import './TopCategories.css'
import data from '../../data/Top.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'


export default function TopCategories() {
  const [viewAll, setviewAll] = useState(false)

  return (
    <section className='topCategories'>
      <div className='container'>
        <header className='heading'>
          <div className='part1'>
            <FontAwesomeIcon icon={faSquare} className="squareIcon" color='red' fontSize="25px" />
            <h2>Top Categories</h2>
          </div>
          <div className='view' onClick={() => setviewAll(!viewAll)}>
            <span>{viewAll ? "view less" : "view all"}</span>
          </div>
        </header>
        <section className={viewAll ? "body all" : "body"}>
          {data.map((e) => {
            return <article key={e[3].name}>
              <img src={e[0].src} key={e[0].id} referrerPolicy="no-referrer"></img>
              <img src={e[1].src} key={e[1].id} referrerPolicy="no-referrer"></img>
              <img src={e[2].src} key={e[2].id} referrerPolicy="no-referrer"></img>
              <small >{e[3].name} </small>
              <span>{e[3].ordersNumbers} orders this week </span>
            </article>
          })}
        </section>
      </div>
    </section>
  )
}
