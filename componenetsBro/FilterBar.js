import {
  HStack,
  Checkbox,
  Text,
  Box,
  Center,
  Flex,
  VStack,
  Image,
} from '@chakra-ui/react'

export default () => {
  const filterBarLayout = {
    width: '264px',
    margin: '0',
  }
  const filterContainer = {
    width: '264px',
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'space-between',
    padding: '24px 24px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
  }

  const filterBox = {
    width: '100%',
    margin: '0 8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    _hover: {
      backgroundColor: '#F9FAFB',
    },
    alignItems: 'flex-start',
  }

  const subText = {
    fontSize: '14px',
    color: '#6B7280'
  }

  const categoryText = {
    fontSize: '16px',
  }

  return (
    <VStack sx={filterBarLayout} spacing="24px">
      <Flex sx={filterContainer}>
        <HStack>
          <Checkbox colorScheme={'purple'} />
          <Text sx={categoryText}>On going</Text>
        </HStack>
        <HStack>
          <Checkbox colorScheme={'purple'} />
          <Text sx={categoryText}>Closed</Text>
        </HStack>
      </Flex>

      <Flex sx={filterContainer}>
        <HStack spacing={'16px'}>
          <Image src="/assetsBro/calendar.png" />
          <Text sx={categoryText}>08/08/2022 - Today</Text>
        </HStack>
      </Flex>

      <Flex sx={filterContainer}>
        <VStack spacing={'24px'} width='100%'>
          <HStack spacing={'16px'} sx={filterBox}>
            <Image src="/assetsBro/monitor.png" />
            <VStack spacing={'4px'}>
              <Text sx={categoryText}>category 1</Text>
              <Text sx={subText}>description 1</Text>
            </VStack>
          </HStack>
          
          <HStack spacing={'16px'} sx={filterBox}>
            <Image src="/assetsBro/jigsaw.png" />
            <VStack spacing={'4px'} alignItem='flex-start' textAlign={'center'} alignItems={'flex-start'}>
              <Text sx={categoryText}>category 2 (selected)</Text>
              <Text sx={subText}>· sub category 1</Text>
              <Text sx={subText}>· sub category 2</Text>
            </VStack>
          </HStack>

          <HStack spacing={'16px'} sx={filterBox}>
            <Image src="/assetsBro/shop.png" />
            <VStack spacing={'4px'}>
              <Text sx={categoryText}>category 3</Text>
              <Text sx={subText}>description 3</Text>
            </VStack>
          </HStack>

          <HStack spacing={'16px'} sx={filterBox}>
            <Image src="/assetsBro/monitor.png" />
            <VStack spacing={'4px'}>
              <Text sx={categoryText}>category 4</Text>
              <Text sx={subText}>description 4</Text>
            </VStack>
          </HStack>


        </VStack>
      </Flex>
    </VStack>
  )
}
