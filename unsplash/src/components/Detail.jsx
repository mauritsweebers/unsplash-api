import React, { useLayoutEffect, useRef, useState } from "react";

const layover = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, .8)"
}

const imgDetail = {
}

export default function Detail( {url, onClick} ) {
    const [urlimg, setUrlimg] = useState('')
    const imgRef = useRef();

    useLayoutEffect( () => {
        setUrlimg(url)
        //imgRef.current.src = url
    }, [setUrlimg])
    
    return (
        <div style={layover} onClick={() => onClick()}>
            {urlimg &&
                <img style={imgDetail} ref={ imgRef } src={ urlimg } alt="some name"/>
            }
        </div>
    )
}
