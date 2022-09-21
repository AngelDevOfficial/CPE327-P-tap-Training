import { Box, Text } from '@chakra-ui/react'

export default ({ pageTitle }) => {
  const pageTitleBox = {
    width: '100%',
    backgroundColor: '#fff',
    height: '150px',
    padding: '0px 148px',
    boxShadow:
      '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    paddingTop:'64px'
  }

  const pageTitleText = {
    fontSize: '30px',
    fontWeight: '700',
    marginTop: '17px'
  }

  return (
    <Box sx={pageTitleBox}>
      <Text sx={pageTitleText}>{pageTitle}</Text>
    </Box>
  )
}
