"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@mui/material'
import Header from './components/header/page'
import Slidercomponent from './components/bodyfirst/page'

export default function Home() {
  return (
  <>
  <Box>
    <Header />
    <Slidercomponent />
  </Box>
  </>
  )
}
