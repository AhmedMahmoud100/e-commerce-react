
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import flashingData from '../../data/Flashing.json'
import { useState } from 'react'
import ItemsContainer from '../common/ItemsContainer'

export default function FlashDeals() {
  const [slide, setslide] = useState(0)

  return (
    <section className='fullFlashSection'>
      <div className='flash container'>
        <div className='flashdeals '>
          <header>
            <FontAwesomeIcon icon={faBolt} color="red" fontSize="30px" />
            <h2>Flash Deals</h2>
          </header>
          <section className='itemscontainer'
            style={{ transform: `translateX(-${slide * 25.3}%)` }}>
            <ItemsContainer data={flashingData} />
          </section>
        </div>

        <aside className='arrow'>
          <FontAwesomeIcon icon={faArrowRight} color="red" className='right arrowIcon' onClick={() => { slide < 6 && setslide((pre) => pre + 1) }} />
          <FontAwesomeIcon icon={faArrowLeft} color="red" className='left arrowIcon' onClick={() => { slide > 0 && setslide((pre) => pre - 1) }} />
        </aside>
      </div>
    </section>
  )
}
