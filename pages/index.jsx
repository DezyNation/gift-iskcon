import Head from 'next/head'
import React from 'react'
import { Box, Text, Input, Container, VStack, Button, Image } from '@chakra-ui/react'
import useDownloader from 'react-use-downloader'
import Styles from '../styles/global.module.css'

const Index = () => {
  const { download } = useDownloader()
  return (
    <>
      <Head>
        <title>Krishna Has A Gift For You</title>
      </Head>
      <iframe src="#" frameborder="0" name='hidden_iframe' style={{ width: 0, height: 0 }}></iframe>
      <Box
        w={'full'} h={'100vh'} flexDirection={'column'}
        display={'flex'} bg={'#483838'}
        alignItems={'center'} justifyContent={'center'}
      >
        <Text color={'white'} mb={[12, 20]} fontSize={['2xl', '4xl']} className={Styles.messiri}>Krishna has a gift for you!</Text>
        <form action="https://formsubmit.co/9de68294aebf156ce14f386929436cb6"
          method='POST' target='hidden_iframe' 
          onSubmit={()=>download('./a78b635.pdf', 'Gift From Krishna.pdf')}
        >
          <Container
            w={['full', 'lg', 'xl']} p={6}
            rounded={'16'} boxShadow={['none', 'lg']}
            bg={'#42855B'}
          >
            <VStack spacing={8}>
              <Input variant={'outline'} rounded={'full'}
                name={'Name'} placeholder={'Enter Your Name'}
                color={'white'} _placeholder={{ color: 'aqua' }} required />
              <Input variant={'outline'} rounded={'full'}
                name={'Email'} type={'email'} color={'white'}
                placeholder={'Enter Your Email'}
                _placeholder={{ color: 'aqua' }} required />
              <Input variant={'outline'} rounded={'full'}
                name={'Phone'} type={'tel'} color={'white'}
                placeholder={'Enter Phone Number'} _placeholder={{ color: 'aqua' }}
                required />
                <input type="hidden" name='_webhook' value={'https://script.google.com/macros/s/AKfycbyqu1QLP1oeqHHATUJpJpiCGH-c-zGBnRx4qWBWbzEvb8_CRr949FSa0HA5SSnETA-R/exec?gid=0'} />
              <Button type={'submit'} colorScheme={'green'} rounded={'full'} bg={'#A9AF7E'}>
                Download The Gift
              </Button>
            </VStack>
          </Container>
        </form>
      </Box>
      <Box color={'white'} bg={'#483838'} pb={2}>
        <Text textAlign={'center'} color={'white'}>&copy; Copyright 2023, Krishna Consciousness Society, India</Text>
      </Box>
    </>
  )
}

export default Index