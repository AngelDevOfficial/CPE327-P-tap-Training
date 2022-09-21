import { Badge, Box, Button, Heading, HStack, Icon, Image, Flex, Text } from '@chakra-ui/react'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { ImPriceTag } from 'react-icons/im'
import { IoBagHandleSharp } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillDollarCircle, AiFillClockCircle } from 'react-icons/ai'
import { HiTrendingUp } from 'react-icons/hi'
import { BsFillBagDashFill } from 'react-icons/bs'
 
export default (props) => {

    const { item } = props

    const button = {
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
    <Box bgColor='white' w='100%' p='12px'
        border='1px solid #E5E7EB' borderRadius='8px'
    >
        <Flex gap={4}>
            <Box position='relative'>
                <Badge zIndex='2' position='absolute' colorScheme='green' 
                    top='4px' right='4px' borderRadius='8px' p='0 12px'
                >
                    win
                </Badge>
                <Image
                    boxSize='230px'
                    borderRadius='8px'
                    filter='drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.25))'
                    // objectFit='cover'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />
            </Box>
            <Box flex='1' marginLeft='48px'>
                <Heading as='h4' size='md' noOfLines={2}>
                    {item.name}
                </Heading>
                <Flex direction='column' gap={1} margin='8px 0 16px 0'>
                    <HStack>
                        <Icon as={BsFillBagDashFill} boxSize='20px' color='#9CA3AF'/>
                        <Text noOfLines={1}>{item.description}</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaMapMarkerAlt} boxSize='20px' color='#9CA3AF'/>
                        <Text noOfLines={1}>{item.location}</Text>
                    </HStack>
                    <HStack>
                        <Icon as={AiFillDollarCircle} boxSize='20px' color='#9CA3AF'/>
                        <Text noOfLines={1}>Start bidding price: {item.initialPrice}</Text>
                    </HStack>
                    <HStack>
                        <Icon as={AiFillClockCircle} boxSize='20px' color='#9CA3AF'/>
                        <Text noOfLines={1}>Closing on {item.closeTime}</Text>
                    </HStack>
                </Flex>
                <Button colorScheme='white' variant='outline'>More details</Button>
            </Box>
            <Flex direction='column' h='auto' align='end' gap={2}>
                <Box w='238px' p='2px 8px' bgColor='#F4F5F7' borderRadius='8px'>
                    <Text color='#34D399' fontSize='30px' fontWeight='bold'>{item.remainTime}</Text>
                </Box>
                <HStack>
                    <Icon as={ImPriceTag} boxSize='24px' color='#9CA3AF' transform='rotate(-90deg)'/>
                    <Text fontSize='28px'>Bidding price: ${item.currentPrice}</Text>
                </HStack>
                <Box flex='1' h='auto'></Box>
                <Button leftIcon={<HiTrendingUp />} sx={button} size='lg'>Place a bid</Button>
            </Flex>
        </Flex>
    </Box>)
}