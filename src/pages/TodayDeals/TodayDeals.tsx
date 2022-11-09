import { useState } from 'react'
import './TodayDeals.css'
import ItemsContainer from '../../Components/common/ItemsContainer'
import watchesData from '../../data/Watches.json'
import sportsdata from '../../data/Sports.json'
import headphonesdata from '../../data/HeadPhones.json'
import glassesdata from '../../data/Glasses.json'
import carsdata from '../../data/Cars.json'
import fashiondata from '../../data/Fashion.json'
import AllData from '../../data/AllData.json'

export default function TodayDeals() {
  const [data, setdata] = useState(AllData)

  return (

    <section className='fullsection'>
      <div className='todaydeals container'>
        <div className='header'>
          <img src='/images/deals/deal.jpg'></img>
          <h1>Epic holiday deals for everyone</h1>
        </div>
        <div className='slider'>
          <div className='box' onClick={() => setdata(AllData)}>
            <img src='/images/deals/all.jpg'></img>
            <h3>All Deals</h3>
          </div>
          <div className='box' onClick={() => setdata(headphonesdata)}>
            <img src='/images/headphones/headphone0.jpg'></img>
            <h3>HeadPhones</h3>
          </div>
          <div className='box' onClick={() => setdata(glassesdata)}>
            <img src='/images/glasses/glasses0.jpg'></img>
            <h3>glasses</h3>
          </div>
          <div className='box' onClick={() => setdata(fashiondata)}>
            <img src='/images/fashion/shoes1.jpg'></img>
            <h3>fashion</h3>
          </div>
          <div className='box' onClick={() => setdata(carsdata)}>
            <img src='/images/cars/cars0.jpg'></img>
            <h3>cars</h3>
          </div>
          <div className='box' onClick={() => setdata(sportsdata)}>
            <img src='/images/sports/ball3.jpg'></img>
            <h3>sports</h3>
          </div>
          <div className='box' onClick={() => setdata(watchesData)}>
            <img src='/images/watches/watch4.jpg'></img>
            <h3>watches</h3>
          </div>
        </div>
        <main className='itemscontainer grid'>
          <ItemsContainer data={data} />
        </main>
      </div>
    </section>
  )
}
