"use client"


import React, {useEffect, useState} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';

const ThreadCommentContainer = () => {
    const [dataObj, setDataObj] = useState<any>({})

    useEffect(() => {
        fetch("http://localhost:3001/post/getallpost").then(
            response =>
            response.json()
        ).then(
            (data: any) => {
            
                console.log(data)
                setDataObj(data)
            }
        )
    }, []);


  return (
    <p>{JSON.stringify(dataObj)}</p>
  )
}

export default ThreadCommentContainer;