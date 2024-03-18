import React from 'react'
import Header from './DayOne/Header'
import Fooder from './DayOne/Footer'
import Card from './DayOne/Card'
const App = () => {
  return (
    <>
      <Header name="My react app Header" />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Fooder name="My react app Footer" />
    </>

  )
}

export default App
