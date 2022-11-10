import './FlashDeals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import flashingData from '../../data/Flashing.json'
import { useState, useEffect } from 'react'
import { ItemType } from '../../Types/JsonDataType'
import Item from '../common/Item'

export default function FlashDeals() {
  const [slide, setslide] = useState(0)
  const [number, setnumber] = useState(6)

  useEffect(() => {
    if (document.body["clientWidth"] < 770 && document.body["clientWidth"] > 601) {
      setnumber(7)
    } else if (document.body["clientWidth"] < 601 && document.body["clientWidth"] > 401) {
      setnumber(8)
    } else if (document.body["clientWidth"] < 401) {
      setnumber(9)
    }
  }, [])

  return (
    <section className='fullFlashSection'>
      <div className='flash container'>
        <div className='flashdeals '>
          <header>
            <FontAwesomeIcon icon={faBolt} color="red" fontSize="30px" />
            <h2>Flash Deals</h2>
          </header>
          <section className='itemscontainer flash'>

            {flashingData.map((e: ItemType) => {
              return <div className='box' style={{ transform: `translateX(-${slide! * 100}%)` }} key={e.id}>
                <Item item={e} />
              </div>
            })}

          </section>
        </div>

        <aside className='arrow'>
          <FontAwesomeIcon icon={faArrowRight} color="red" className='right arrowIcon' onClick={() => { slide < number && setslide((pre) => pre + 1) }} />
          <FontAwesomeIcon icon={faArrowLeft} color="red" className='left arrowIcon' onClick={() => { slide > 0 && setslide((pre) => pre - 1) }} />
        </aside>
      </div>
    </section>
  )
}
