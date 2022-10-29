import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { itemsContext, itemsNumberContext } from '../../context/CreateContext'
import { SetDataToStorage } from '../../assets/LocalStorage'
import { FormatCurrency } from '../../utilities/FormatCurrency'
import './ItemsContainer.css'
import { ItemType } from '../../Types/JsonDataType'



export default function ItemsContainer({ data }: { data: ItemType[] }) {
  const [numbersArray, setnumbersArray] = useContext(itemsNumberContext)
  const [array, setarray] = useContext(itemsContext)

  const AddItems = (e: ItemType) => {
    if (numbersArray != undefined && array != undefined) {
      let newNumberArray = numbersArray
      newNumberArray[e.id] = numbersArray[e.id] + 1
      setnumbersArray!([...newNumberArray])
      if (newNumberArray[e.id] === 1) {
        let newarray = array
        newarray.push(e)
        setarray!([...newarray])
      }
      SetDataToStorage(array, numbersArray)
    }
  }

  return (
    <>
      {data.map((e: ItemType) => {
        return <article className="item" key={e.id}>
          <div className='heading'>
            <span className='off'>{e.discount} Off</span>
            <div>
              <span>{numbersArray![e.id]}</span>
              <FontAwesomeIcon icon={faHeart} color="red" className='heartIcon' />
            </div>
          </div>
          <img src={e.src}></img>
          <footer className='itemFooter'>
            <div>
              <span>{e.name}</span>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
              </div>
              <small>{FormatCurrency(e.price)}</small>
            </div>
            <FontAwesomeIcon icon={faPlus} className="plusIcon" onClick={() => AddItems(e)} />
          </footer>
        </article>
      })}
    </>
  )
}
