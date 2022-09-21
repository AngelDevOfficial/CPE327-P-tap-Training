import { Input, Button, HStack, Box } from '@chakra-ui/react'

export default () => {
  const searchBoxLayout = {
    width: '80%',
    margin: '26px auto',
  }

  const searchButton = {
    width: '154px',
    backgroundColor: '#4F46E5',
    color: '#fff',
    _hover: {
      backgroundColor: '#4F46E5'
    },
    _active: {
      backgroundColor: '#4F46E5'
    }
  }

  return (
    <Box sx={searchBoxLayout}>
      <HStack>
        <Input
          type="text"
          placeholder="What are you looking for?"
          backgroundColor={'#fff'}
        />
        <Button sx={searchButton}>Search</Button>
      </HStack>
    </Box>
  )
}
