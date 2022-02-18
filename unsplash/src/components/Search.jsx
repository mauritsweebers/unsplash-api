import React, { useState } from 'react'

// styling
const searchBar = {
    display: "flex",
    padding: "2rem"
}

export default function Search({click}) {
    // api parameters
    const [query, setQuery] = useState('')
    const [orientation, setOrientation] = useState('')
    const [orderby, setOrderBy] = useState('latest')
    const [perpage, setPerpage] = useState('10')

    // params object
    const params = {
        query: query,
        orientation: orientation,
        order_by: orderby,
        per_page: perpage
    }

    return (
        <div style={searchBar}>
            <input type="text" onChange={ (e) => {setQuery(e.target.value)}} />
            <select defaultValue="" name="Orientation" onChange={ (e) => setOrientation(e.target.value)} >
                <option value="">All</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="squarish">Squarish</option>
            </select>
            <select defaultValue="latest" name="Order" onChange={ (e) => setOrderBy(e.target.value)} >
                <option value="latest">Latest</option>
                <option value="relevant">Relevant</option>
            </select>
            <select defaultValue="10" name="Perpage" onChange={ (e) => setPerpage(e.target.value)} >
                <option value="10">10 per page</option>
                <option value="25">25 per page</option>
                <option value="50">50 per page</option>
            </select>
            <input type="button"  value="Find images" onClick={() => click(params)} />
        </div>
    )
}
