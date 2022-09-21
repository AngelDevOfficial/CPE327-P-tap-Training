import { Box, HStack, VStack } from '@chakra-ui/react'
import FilterBar from '../componenetsBro/FilterBar'
import Navbar from '../componenetsBro/Navbar'
import SearchBox from '../componenetsBro/SearchBox'
import Item from '../componenetsBro/Item'

export default () => {
  const contentLayout = {
    width: '80%',
    margin: 'auto',
  }
  const pageLayout = {
    paddingTop: '0px',
  }

  const mockItem = {
    name: 'The Dark Side of The Moon',
    description: 'Some description',
    location: 'Bangkok, Thailand',
    currentPrice: '20k',
    initialPrice: '12k',
    closeTime: 'September 5,2022 00:00:00',
    remainTime: '71H : 12M : 21S',
  }

  return (
    <>
      <Navbar />
      <Box sx={pageLayout}>
        <SearchBox />
        <HStack sx={contentLayout} alignItems='flex-start'>
          <FilterBar />
          <VStack spacing={'24px'}>
            <Item item={mockItem} />
            <Item item={mockItem} />
            <Item item={mockItem} />
          </VStack>
        </HStack>
      </Box>
    </>
  )
}
