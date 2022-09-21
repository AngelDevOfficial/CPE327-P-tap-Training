import { HStack } from '@chakra-ui/react'
import Item from '../componenetsBro/Item'
import FilterBar from '../componenetsBro/FilterBar'

export default function Home() {

  const mockItem = {
    name: "The Dark Side of The Moon",
    description: "Some description",
    location: "Bangkok, Thailand",
    currentPrice: "20k",
    initialPrice: "12k",
    closeTime: "September 5,2022 00:00:00",
    remainTime: "71H : 12M : 21S"
  }

  return (
    <div>
      <Item item={mockItem}/>
    </div>
  )
}
