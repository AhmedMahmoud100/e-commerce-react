import { useEffect, useState } from 'react'

type MobileAsidePropsType = {
  showbrand : React.Dispatch<React.SetStateAction<string>>
}

export default function MobileAside(props: MobileAsidePropsType) {
  const [brand, setbrand] = useState<string>("original")

  useEffect(() => {
    props.showbrand(brand)
  }, [brand])

  return (
    <aside className="mobileAside">
      <h2>Brands</h2>
      <ul >
        <li className="section" onClick={() => setbrand("apple")}>
          <img src="/images/MobilePhones/iphone5.jpg"></img>
          <h3 >Apple</h3>
        </li>

        <li className="section" onClick={() => setbrand("samsung")}>
          <img src="/images/MobilePhones/samsung0.jpg"></img>
          <h3 >Samsung</h3>
        </li>

        <li className="section" onClick={() => setbrand("oppo")}>
          <img src="/images/MobilePhones/oppo1.jpg"></img>
          <h3 >Oppo</h3>
        </li>

        <li className="section" onClick={() => setbrand("vivo")}>
          <img src="/images/MobilePhones/vivo0.jpg"></img>
          <h3 >Vivo</h3>
        </li>

        <li className="section" onClick={() => setbrand("redmi")}>
          <img src="/images/MobilePhones/redmi0.jpg"></img>
          <h3 >Redmi</h3>
        </li>
        
      </ul>
    </aside>
  )
}