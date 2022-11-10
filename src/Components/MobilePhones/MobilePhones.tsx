import { useEffect, useState } from 'react'
import MobileAside from './MobileAside'
import Allphones from '../../data/Allphones.json'
import ItemsContainer from '../common/ItemsContainer'
import { ItemType } from '../../Types/JsonDataType'
import './MobilePhones.css'

type jsondatDataType = {
  "original": ItemType[]
  "all": ItemType[]
  "apple": ItemType[]
  "samsung": ItemType[]
  "oppo": ItemType[]
  "vivo": ItemType[]
  "redmi": ItemType[]
}

const jsonData :jsondatDataType   = {
  "original": Allphones.slice(0, 8),
  "all": Allphones,
  "apple": Allphones.slice(0, 10),
  "samsung": Allphones.slice(10, 19),
  "oppo": Allphones.slice(19, 26),
  "vivo": Allphones.slice(26, 34),
  "redmi": Allphones.slice(34, 43),
}

export function MobilePhones() {
  const [viewAll, setviewAll] = useState(false)
  const [brand, setbrand] = useState<string>("original")

  useEffect(() => {
    if (viewAll) {
      setbrand("all")
    } else {
      setbrand("original")
    }
  }, [viewAll])

  return (
    <section className='fullPhonesSection' >
      <div className='container'>
        <section className='PhonesSection'>
          <MobileAside showbrand={setbrand} />
          <main>
            <header>
              <h2>Mobile Phones</h2>
              <div onClick={() => setviewAll(!viewAll)} className="view">
                <span>{viewAll ? "view less" : "view all"}</span>
              </div>
            </header>
            <section className='itemscontainer phones grid'>
              <ItemsContainer data={jsonData[brand as keyof jsondatDataType]} />
            </section>
          </main>
        </section>
      </div>
    </section>
  )
}



