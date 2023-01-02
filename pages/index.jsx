import Head from 'next/head'
import {React, useState} from 'react'
import { Box, Text, Input, Container, VStack, Button, HStack, Image } from '@chakra-ui/react'
import useDownloader from 'react-use-downloader'
import Styles from '../styles/global.module.css'

const Index = () => {
  const { download } = useDownloader()
  const [disabled, setDisabled] = useState(false)

  function handleDownload(){
    download('./a78b635.pdf', 'Gift From Krishna.pdf')
    setDisabled(true)
    setTimeout(()=>setDisabled(false),20000)
  }

  return (
    <>
      <Head>
        <title>Krishna Has A Gift For You</title>
      </Head>
      <iframe src="#" frameBorder="0" name='hidden_iframe' style={{ width: 0, height: 0 }}></iframe>
      <Box w={'full'} h={'100vh'}
        bg={["url('bg.jpg')", "url('bgfull.jpg')"]} bgPos={['bottom', 'center']}
        bgRepeat={'no-repeat'} bgSize={'cover'}
        bgAttachment={['fixed', 'unset']}>
        <Box
          w={'full'} h={'100vh'} flexDirection={'column'}
          display={'flex'} bg={'rgba(0, 0, 0, 0.75)'}
          alignItems={'center'} justifyContent={'center'}
        >
          <HStack position={'absolute'} top={0} l={0} r={0} alignItems={'center'} justifyContent={'center'} w={'full'} mx={'auto'} spacing={2} pt={4} pb={16}>
            <Image src='logo.png' w={'12'} />
            <Text color={'white'} fontSize={'lg'}>ISKCON Inc.</Text>
          </HStack>
          <Text color={'white'} mb={[8, 16]} fontSize={['2xl', '4xl']} className={Styles.messiri} textAlign={'center'}>Krishna has a new year gift for you!</Text>
          <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfD8ItQNCOytZU0cRRFnCuNo64AmhwCJs1xp2f7mvMItMy2Aw/formResponse"
            method='POST' target='hidden_iframe'
            onSubmit={() => handleDownload()}
          >
            <Container
              w={['full', 'lg', 'xl']} p={6}
              rounded={'16'} boxShadow={['none', 'lg']}
              bg={'rgba(255,255,255,0.25)'}
            >
              <VStack spacing={8}>
                {disabled ? <Text color={'white'} py={4}>Your download will start soon!</Text> : null}
                <Input variant={'outline'} rounded={'full'}
                  name={'entry.1112728928'} placeholder={'Enter Your Name'}
                  color={'white'} borderColor={'white'} _placeholder={{ color: 'white' }} required />
                <Input variant={'outline'} rounded={'full'}
                  name={'entry.1695348309'} type={'email'} color={'white'}
                  placeholder={'Enter Your Email'} borderColor={'white'}
                  _placeholder={{ color: 'white' }} required />
                <Input variant={'outline'} rounded={'full'} borderColor={'white'}
                  name={'entry.783084646'} type={'tel'} color={'white'}
                  placeholder={'Enter Phone Number'} _placeholder={{ color: 'white' }}
                  required />
                <input type="hidden" name='_webhook' value={'https://script.google.com/macros/s/AKfycbyqu1QLP1oeqHHATUJpJpiCGH-c-zGBnRx4qWBWbzEvb8_CRr949FSa0HA5SSnETA-R/exec?gid=0'} />
                <Button type={'submit'} colorScheme={'blue'} rounded={'full'} disabled={disabled}>
                  Download The Gift
                </Button>
              </VStack>
            </Container>
          </form>
        </Box>
        <Box color={'white'} bg={'#483838'} py={2}>
          <Text textAlign={'center'} color={'white'}>&copy; Copyright 2023, Krishna Consciousness Society, India</Text>
        </Box>
      </Box>
    </>
  )
}

export default Index