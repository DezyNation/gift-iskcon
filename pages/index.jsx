import Head from 'next/head'
import { React, useState } from 'react'
import { Box, Text, Input, Container, VStack, Button, HStack, Image, Progress } from '@chakra-ui/react'
import useDownloader from 'react-use-downloader'
import ReCAPTCHA from "react-google-recaptcha";
import Styles from '../styles/global.module.css'
import Link from 'next/link';

const Index = () => {
  const { download, percentage } = useDownloader()
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  function onChange() {
    setDisabled(false)
  }

  function handleDownload() {
    download('https://link.storjshare.io/raw/ju2gmuv2hvbtxagh6iphxgt75kbq/giftbykrishna/Gift%20From%20Krishna%20%281%29.pdf', 'Gift From Krishna.pdf')
    setLoading(true)
    setTimeout(() => setLoading(false), 60000)
  }

  return (
    <>
      <Head>
        <title>Krishna Chaitanya Has A Gift For You</title>
      </Head>
      <iframe src="#" name='hidden_iframe' style={{ width: 0, height: 0 }}></iframe>
      <Box w={'full'} minH={'100vh'}
        bgImg={'https://www.vcm.org.in/blog/wp-content/uploads/2017/03/LordChaitanya-crop.jpg'} bgPos={['bottom', 'center']}
        bgRepeat={'no-repeat'} bgSize={'cover'}
        bgAttachment={['fixed', 'unset']}>
        <Box pb={8}
          w={'full'} minH={'inherit'} flexDirection={'column'}
          display={'flex'} bg={'rgba(0, 0, 0, 0.75)'}
          alignItems={'center'} justifyContent={'center'}
        >
          <HStack alignItems={'center'} justifyContent={'center'} w={'full'} mx={'auto'} spacing={2} pt={4} pb={16}>
            <Image src='logo.png' w={'12'} />
            <Text color={'white'} fontSize={'lg'}>ISKCON Inc.</Text>
          </HStack>
          <Text
            color={'white'} mb={[8, 16]}
            fontSize={['lg', '2xl']}
            className={Styles.messiri}
            textAlign={'center'}
            maxW={['95%', '85%']}
          >
            On this auspicious occasion of appearance of Sri Chaitanya Mahaprabhu , recieve a wonderful gift from him
          </Text>
          <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfD8ItQNCOytZU0cRRFnCuNo64AmhwCJs1xp2f7mvMItMy2Aw/formResponse"
            method='POST' target='hidden_iframe'
            onSubmit={() => handleDownload()}
          >
            <Container
              w={['full', 'lg', 'xl']} p={6}
              borderTopLeftRadius={'16'}
              borderBottomRightRadius={'16'}
              boxShadow={['none', 'lg']}
              bg={'#FFD7001F'}
            >
              <VStack spacing={8}>
                {percentage <= 100 && percentage > 0 ?
                  <Box>
                    <Text color={'white'}>Downloading</Text>
                    <Progress colorScheme={'yellow'} value={percentage} w={'full'} />
                  </Box> : null}
                <Input variant={'outline'} rounded={'full'}
                  name={'entry.1112728928'} placeholder={'Enter Your Name'}
                  _placeholder={{ color: 'white' }} required />
                <Input variant={'outline'} rounded={'full'}
                  name={'entry.1695348309'} type={'email'}
                  placeholder={'Enter Your Email'}
                  _placeholder={{ color: 'white' }} required />
                <input type="hidden" name='_webhook' value={'https://script.google.com/macros/s/AKfycbyqu1QLP1oeqHHATUJpJpiCGH-c-zGBnRx4qWBWbzEvb8_CRr949FSa0HA5SSnETA-R/exec?gid=0'} />
                <ReCAPTCHA
                  sitekey="6Le8dsYjAAAAAAWZ1nCyfw_aoftGxcpo3G41xVtZ"
                  onChange={onChange}
                />
                <Button type={'submit'} colorScheme={'orange'} isLoading={loading} rounded={'full'} disabled={disabled}>
                  Download The Gift
                </Button>
              </VStack>
            </Container>
          </form>

          <VStack pt={12} mb={4}>
            <Link href={'https://projects.iskconincstore.com'}>
              <Image
                src={'/donation.jpeg'}
                w={['full', 'xs']} pb={2}
              />
              <Button size={'sm'} colorScheme={'yellow'}>Consider Donating For Building This Temple</Button>
            </Link>
          </VStack>
        </Box>
        <Box color={'white'} bg={'#483838'} py={2}>
          <Text textAlign={'center'} color={'white'}>&copy; Copyright 2023, Krishna Consciousness Society, India</Text>
        </Box>
      </Box>
    </>
  )
}

export default Index
