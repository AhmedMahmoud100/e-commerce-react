import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { itemsContext, itemsNumberContext } from '../../context/CreateContext'
import { SetDataToStorage } from '../../assets/LocalStorage'
import { FormatCurrency } from '../../utilities/FormatCurrency'
import './ItemsContainer.css'
import { ItemType } from '../../Types/JsonDataType'

export default function Item({ item }: {item :ItemType }) {

    const [numbersArray, setnumbersArray] = useContext(itemsNumberContext)
    const [array, setarray] = useContext(itemsContext)

    const AddItems = (item: ItemType) => {
        if (numbersArray != undefined && array != undefined) {
            let newNumberArray = numbersArray
            newNumberArray[item.id] = numbersArray[item.id] + 1
            setnumbersArray!([...newNumberArray])
            if (newNumberArray[item.id] === 1) {
                let newarray = array
                newarray.push(item)
                setarray!([...newarray])
            }
            SetDataToStorage(array, numbersArray)
        }
    }
    return (
        <article className="item">
            <div className='heading'>
                <span className='off'>{item.discount} Off</span>
                <div>
                    <span>{numbersArray![item.id]}</span>
                    <FontAwesomeIcon icon={faHeart} color="red" className='heartIcon' />
                </div>
            </div>
            <img src={item.src}></img>
            <footer className='itemFooter'>
                <div>
                    <span>{item.name}</span>
                    <div className='stars'>
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                        <FontAwesomeIcon icon={faStar} color="yellow" />
                    </div>
                    <small>{FormatCurrency(item.price)}</small>
                </div>
                <FontAwesomeIcon icon={faPlus} className="plusIcon" onClick={() => AddItems(item)} />
            </footer>
        </article>
    )
}
