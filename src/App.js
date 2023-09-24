import React from 'react'
import Person from './components/person/Person'
import Box from './components/box/Box'
import './App.css'

const App = () => {
  const StyleObj={
    display:"flex",
    flexWrap:"wrap"
  }


  const img1="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img2="https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  const img3="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img4="https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img5="https://images.pexels.com/photos/1297611/pexels-photo-1297611.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img6="https://images.pexels.com/photos/6893376/pexels-photo-6893376.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img7="https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=600"
  const img8 = `https://images.pexels.com/photos/5083491/pexels-photo-5083491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  return (
    <div style={StyleObj}>
      
      <Box img={img1} title="Macbook Pro" price={1500} />
      <Box img={img2} title="Macbook air" price={1200}/>
      <Box img={img3} title="Dell Latitude" price={950} />
      <Box img={img4} title="Hp Pavillion" price={800} />
      <Box img={img5} title="Samsung" price={900} />
      <Box img={img6} title="Elitebook" price={870} />
      <Box img={img7} title="Asus" price={677} />
      <Box img={img8} title="ThinkPad" price={880} />

      {/* <Person name="Ajala Olorunmbe" job="footballer" language="Yoruba"/>
      <Person name="Faruk Okunlola" job="Hotel manager" language="Egbado"/>
      <Person name="Dre Dangote" job="Product designer" language="figma"/>
      <Person name="Olawale" job="Pastor" language="Jewish"/> */}
    </div>
  )
}

export default App