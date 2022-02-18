import React, { useState } from 'react'
import { useEffect } from 'react'
import UnsplashApi from './UnsplashApi'
import Search from './Search'
import Detail from './Detail'

// styles
const imgGrid = {
  display: "flex",
  flexWrap: "wrap",
  backgroundcColor: "#87AAF7"
}

const imgStyle = {
  display: "flex",
  flex: 1,
  minWidth: "25%",
  backgroundcColor: "#87AAF7"
}

const img = {
  width: "100%",
  maxWidth: "100%",
  height: "auto",
  objectFit: "cover"
}


export default function Grid() {

  const [data, setData] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)

  // when params for api call
  const [params, setParams] = useState({})

  // url for detail screen
  const [detail, setDetail] = useState('')

  // when params are submitted setParams
  const searchWithParams = (p) => {
    console.log(p);
    setParams(p)
  }
  
  // param state change > reset data and make new API call
  useEffect( () => {
    setData({})
    setLoaded(false)
    setError('')

    // make api call
    // receive a Promise
    UnsplashApi(params)
    .then(res => res.json())
    .then(json => {
      if(json.total === undefined){
        setData(json)
      }else{
        setData(json.results)
      }
      //console.log(data)
      setLoaded(true)
    }).catch(e => {
      setError(e)
    })

  },[params])
  
  return (
    <>
    {!loaded &&
      <h1>Loading</h1>
    }
    {error &&
      <h1>{error}</h1>
    }
    {/* INPUT BAR */}
    <Search click={searchWithParams}/>
    <div style={imgGrid}>
      
      {data.map &&
        data.map(image => {
          return(
            <div key={image.id} style={imgStyle}>
                <img style={img} src={image.urls.thumb} alt={image.color} onClick={ () => setDetail(image.urls.small) } />
            </div>
        )
        })
      }
    </div>
    {/* DETAIL SCREEN */}
    {detail && <Detail url={ detail } onClick={ () => setDetail('') }/>}
    </>
  )
}
