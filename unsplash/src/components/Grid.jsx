import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import UnsplashApi from './UnsplashApi'

export default function Grid() {
  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [params, setParams] = useState({

  })
  
  useLayoutEffect( () => {
    setData({});
    setLoaded(false)

    UnsplashApi(params).then( val => {
      setData(val)
      setLoaded(true)
    })

  },[params])

  console.log(data)
  
  return (
    <>
    {loaded &&
      <h1>Loaded</h1>
    }
    </>
  )
}
