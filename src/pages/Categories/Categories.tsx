import { useEffect } from 'react'
import { useState } from 'react'
import ItemsContainer from '../../Components/common/ItemsContainer'
import watchesData from '../../data/Watches.json'
import sportsdata from '../../data/Sports.json'
import makeupdata from '../../data/MakeUp.json'
import headphonesdata from '../../data/HeadPhones.json'
import glassesdata from '../../data/Glasses.json'
import carsdata from '../../data/Cars.json'
import fashiondata from '../../data/Fashion.json'
import mobiledata from '../../data/Allphones.json'
import { useLocation } from 'react-router-dom'
import {CategoriesType} from '../../Types/JsonDataType'

export default function Categories() {
  const [value, setvalue] = useState('')
  const location = useLocation()

  const jsonData: CategoriesType = {
    "watches": watchesData,
    "sports": sportsdata,
    "makeUp": makeupdata,
    "headPhones": headphonesdata,
    "glasses": glassesdata,
    "cars": carsdata,
    "fashion": fashiondata,
    "mobilePhones": mobiledata
  }
  useEffect(() => {
    const category = location.state.CategoryName

    setvalue(category)
  }, [location])

  return (
    <>
      <section className="itemscontainer grid container">
        {value != '' && <ItemsContainer data={jsonData[value as keyof CategoriesType]!} />}
      </section>
    </>
  )
}
