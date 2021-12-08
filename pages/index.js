import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"

export default function Home() {
  return (
    <Wrapper>
      <Map>MAP</Map>
      <ActionItems>START</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col bg-red-300
`

const Map = tw.div`
bg-red-500`

const ActionItems = tw.div``

