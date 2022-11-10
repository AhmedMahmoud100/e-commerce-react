import './ItemsContainer.css'
import { ItemType } from '../../Types/JsonDataType'
import Item from './Item'

export default function ItemsContainer({ data }: { data: ItemType[] }) {
  return (
    <>
      {data.map((e: ItemType) => {
        return <Item item={e} key={e.id} />
      })}
    </>
  )
}
