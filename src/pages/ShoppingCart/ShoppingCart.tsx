import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { SetDataToStorage } from '../../assets/LocalStorage'
import { GetDataFromStorage } from '../../assets/LocalStorage'
import './ShoppingCart.css'
import { ItemType } from '../../Types/JsonDataType'

export default function ShoppingCart() {
  const [items, setitems] = useState<ItemType[]>([])
  const [itemsNumber, setItemsNumber] = useState<number[]>([])
  const [store, setstore] = useState(true)

  function DeleteItem(e: ItemType, i: number) {
    let newArray = items
    newArray.splice(i, 1)
    setitems([...newArray])

    let newNumberArray = itemsNumber
    newNumberArray[e.id] = 0
    setItemsNumber([...newNumberArray])
  }

  function Total() {
    let price = 0
    items.map((e: ItemType) => {
      price += e.price * itemsNumber[e.id]
    })
    return price
  }

  function ModifyNumber(i: number, e: ItemType, condition: boolean) {
    let newNumberArray = itemsNumber
    newNumberArray[e.id] = condition ? itemsNumber[e.id] + 1 : itemsNumber[e.id] - 1

    if (newNumberArray[e.id] === 0) {
      let newArray = items
      newArray.splice(i, 1)
      setitems([...newArray])
    }
    setItemsNumber([...newNumberArray])
  }

  useEffect(() => {
    if (store) {
      GetDataFromStorage(setItemsNumber, setitems)
    }
    setstore(false)
  }, [])

  useEffect(() => {
    if (!store) {
      SetDataToStorage(items, itemsNumber)
    }
  }, [itemsNumber])

  return (
    <section className='fullShoppingCart'>
      <div className='container'>
        <section className='shoppingCart'>
          <main className='shoppingItems'>
            {items.map((e: ItemType, i: number) => {
              return <article className='item' key={e.id}>
                <section className='itemInfo'>
                  <h1>{e.name}</h1>
                  <img src={e.src}></img>
                  <span>
                    <small>{e.price} * {itemsNumber[e.id]} </small>
                    <small>{e.price * itemsNumber[e.id]}</small>
                  </span>
                </section>
                <section className='icons'>
                  <FontAwesomeIcon icon={faX} className="xIcon" onClick={() => DeleteItem(e, i)} />
                  <span className='downIcons'>
                    <FontAwesomeIcon icon={faPlus} className="plusIcon" onClick={() => ModifyNumber(i, e, true)} />
                    <FontAwesomeIcon icon={faMinus} className="minusIcon" onClick={() => ModifyNumber(i, e, false)} />
                  </span>
                </section>
              </article>
            })}
          </main>

          <section className='cartSummary'>
            <h2>Cart Summary</h2>
            <div className='totalPrice'>
              <span>total price : </span>
              <span>{Total()} </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}
