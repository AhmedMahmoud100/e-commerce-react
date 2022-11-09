import AllData from "../../data/AllData.json";
import ItemsContainer from "../../Components/common/ItemsContainer";
import { useEffect, useState } from "react";
import watchesData from '../../data/Watches.json'
import sportsdata from '../../data/Sports.json'
import makeupdata from '../../data/MakeUp.json'
import headphonesdata from '../../data/HeadPhones.json'
import glassesdata from '../../data/Glasses.json'
import carsdata from '../../data/Cars.json'
import fashiondata from '../../data/Fashion.json'
import mobiledata from '../../data/Allphones.json'
import { useLocation } from "react-router-dom";
import { ItemType } from '../../Types/JsonDataType'
import {CategoriesType} from '../../Types/JsonDataType'
import './SearchPage.css'

export default function SearchPage() {

  const [data, setdata] = useState<ItemType[]>([])
  let location = useLocation()

  const jsonData: CategoriesType = {
    "Watches": watchesData,
    "Sports": sportsdata,
    "MakeUp": makeupdata,
    "HeadPhones": headphonesdata,
    "Glasses": glassesdata,
    "Cars": carsdata,
    "Fashion": fashiondata,
    "MobilePhones": mobiledata,
    "All": AllData
  }

  useEffect(() => {
    const type  = location.state.category 
    const search = location.state.search

    if (search === "") {
      setdata([])
    } else {
      let data = jsonData[type as keyof CategoriesType]!.filter((e: ItemType) => {
        return e.name.toLowerCase().includes(search.toLowerCase());
      });
      setdata([...data]);
    }

  }, [location])
  return (
    <section className="fullSearchResults">
      <div className="container">
        <h2>Results </h2>
        <section className="itemscontainer grid">
          <ItemsContainer data={data} />
        </section>
      </div>
    </section>
  );
}
