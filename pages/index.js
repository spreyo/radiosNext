import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Radio } from '../components/Radio'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [ContentHidden, setContentHidden] = useState(false);
  const [ConfirmHidden, setConfirmHidden] = useState(false);
  const [radios, setRadios] = useState([]);
  const [done, setDone] = useState(0);
  // var radios = [];

  useEffect(() => {
    async function fetchRadios() {
      const res = await fetch("https://api.npoint.io/255faad8edc3506c30f7", { method: "GET", headers: { "Content-Type": "application/json" } })
      const data = await res.json();
      var newRadios = [];
      data.forEach(dat => {
        newRadios.push(dat);
      })
      setRadios(newRadios);
      // console.log(radios);

    }
    fetchRadios();
  })

  function Confirm() {
    setContentHidden(false);
    setConfirmHidden(true);
  }

  function radioMap() {

    radios.map(radio => {
      console.log(radio + " s")
    })
  }

  async function fetchRadios() {
    const res = await fetch("https://api.npoint.io/255faad8edc3506c30f7", { method: "GET", headers: { "Content-Type": "application/json" } })
    const data = await res.json();
    var newRadios = [];
    data.forEach(dat => {
      newRadios.push(dat);
    })
    // setRadios(newRadios);
    // console.log(radios);
    return newRadios;

  }

  return (
    <>
      {/* <div id="confirm" onClick={() => Confirm()} hidden={ConfirmHidden}  >
        <h1>click to continue</h1>
      </div> */}
      <div id="headingDiv">
        <h1 className="heading">radio</h1>
      </div>


      <div id="content" hidden={ContentHidden}>
        <>{radios.map(radio => {
          
            return <><Radio radioName={radio["radioName"]} audioStream={radio["audioStream"]} isH idden={ContentHidden} /></>
          
        })}
        </>
      </div>
    </>
  )
}
