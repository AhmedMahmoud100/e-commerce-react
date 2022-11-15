import { useEffect, useState } from 'react'
import './TodayDeals.css'
import ItemsContainer from '../../Components/common/ItemsContainer'
import watchesData from '../../data/Watches.json'
import sportsdata from '../../data/Sports.json'
import headphonesdata from '../../data/HeadPhones.json'
import glassesdata from '../../data/Glasses.json'
import carsdata from '../../data/Cars.json'
import fashiondata from '../../data/Fashion.json'
import AllData from '../../data/AllData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function TodayDeals() {
  const [data, setdata] = useState(AllData)
  const [slide, setslide] = useState(0)
  const [number, setnumber] = useState(2)

  useEffect(() => {
    if (document.body["clientWidth"] < 551 && document.body["clientWidth"] > 400) {
      setnumber(4)
    } else if (document.body["clientWidth"] < 401) {
      setnumber(5)
    }
  }, [])

  return (

    <section className='fullsection'>
      <div className='todaydeals container'>
        <div className='header'>
          <img src='/images/deals/deal.jpg'></img>
          <h1>Epic holiday deals for everyone</h1>
        </div>
        <div className="sliderContainer">
          <div className='slider' >
            <div className='box' onClick={() => setdata(AllData)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/all.jpg'></img>
                <h3>All Deals</h3>
              </figure>

            </div>
            <div className='box' onClick={() => setdata(headphonesdata)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/headphone0.jpg'></img>
                <h3>HeadPhones</h3>
              </figure>

            </div>
            <div className='box' onClick={() => setdata(glassesdata)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/glasses1.jpg'></img>
                <h3>glasses</h3>
              </figure>


            </div>
            <div className='box' onClick={() => setdata(fashiondata)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/shoes1.jpg'></img>
                <h3>fashion</h3>
              </figure>

            </div>
            <div className='box' onClick={() => setdata(carsdata)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/cars10.jpg'></img>
                <h3>cars</h3>
              </figure>

            </div>
            <div className='box' onClick={() => setdata(sportsdata)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/ball4.jpg'></img>
                <h3>sports</h3>
              </figure>

            </div>
            <div className='box' onClick={() => setdata(watchesData)} style={{ transform: `translateX(-${slide! * 100}%)` }}>
              <figure>
                <img src='/images/deals/watch4.jpg'></img>
                <h3>watches</h3>
              </figure>

            </div>

          </div>
          <aside className='arrow'>
            <FontAwesomeIcon icon={faArrowRight} color="red" className='right arrowIcon' onClick={() => { slide < number && setslide((pre) => pre + 1) }} />
            <FontAwesomeIcon icon={faArrowLeft} color="red" className='left arrowIcon' onClick={() => { slide > 0 && setslide((pre) => pre - 1) }} />
          </aside>
        </div>
        <main className='itemscontainer grid'>
          <ItemsContainer data={data} />
        </main>
      </div>
    </section>
  )
}
