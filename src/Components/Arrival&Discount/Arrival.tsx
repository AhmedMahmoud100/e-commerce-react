import { FormatCurrency } from '../../utilities/FormatCurrency'
import { useState } from 'react'
import { ItemType } from '../../Types/JsonDataType'
import './Arrival.css'

type ArrivalPropsType = {
  data : ItemType[]
  name : string
}

export default function Arrival(props: ArrivalPropsType) {
  const [viewAll, setviewAll] = useState(false)

  return (
    <section className='arrival discount'>
      <div className='container'>
        <header>
          <h2 className={props.name}>{props.name}</h2>
          <div className="view" onClick={() => setviewAll(!viewAll)} >
            <span>{viewAll ? "view less" : "view all"}</span>
          </div>
        </header>
        <section className={viewAll ? "body all" : "body"}>

          {props.data.map((e: ItemType) => {
            return <article key={e.id}>
              <img src={e.src}></img>
              <div>
                <h3>{e.name}</h3>
                <span>{FormatCurrency(e.price)}</span>
              </div>
            </article>
          })}
          
        </section>
      </div>
    </section>
  )
}
