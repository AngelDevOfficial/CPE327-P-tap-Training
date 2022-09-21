import {
  HStack,
  Button,
  Text,
  Flex,
  Avatar,
  Icon,
  Image,
} from '@chakra-ui/react'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import PageTitle from './PageTitle'

export default () => {

  const navbarLayout = {
    width: '100%',
    backgroundColor: '#1F2937',
    padding: '0 140px',
    height: '64px',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    zIndex: '10000',
  }

  const headerText = {
    fontSize: '17px',
    fontWeight: '700',
    color: '#fff'
  }

  const menuText = {
    fontSize: '14px',
    color: '#D1D5DB',
    padding: '8px 12px',
    cursor: 'pointer',
    _hover : {
      color: '#fff',
      backgroundColor: '#111827',
      borderRadius: '8px',
      borderRadius: '6px',
    }
  }


  return (
    <>
    <Flex sx={navbarLayout}>
      <HStack spacing={'12px'}>
        <HStack marginRight={'28px'}>
          <Image src="/assetsBro/logo.png" />
          <Text sx={headerText}>MarketWhiz</Text>
        </HStack>
        <Text sx={menuText}>Browse</Text>
        <Text sx={menuText}>My Item</Text>
        <Text sx={menuText}>My Bid</Text>
        <Text sx={menuText}>Wallet</Text>
      </HStack>
      <HStack spacing={'20px'}>
        <Icon as={MdOutlineNotificationsNone} boxSize='21px' color='#9CA3AF'/>
        <Avatar src="https://img.a.transfermarkt.technology/portrait/big/3139-1459504284.jpg?lm=1" width='32px' height='32px'/>
      </HStack>
    </Flex>
    <PageTitle pageTitle={'Browse auction'}/>
    </>
  )
}
