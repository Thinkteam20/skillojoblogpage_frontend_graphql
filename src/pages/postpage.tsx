import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import logo from './logo.svg';



import '../App.css';
import '../mobile.css'

import {useArticlesQuery} from "../generated/graphql"

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import '../index.css';



function Postpage() {
    const {number } =useParams();
    const[ payload , setPayload ] = useState('');
    useEffect(()=>{
        {number && setPayload(number)}
        
         
        
    })

    // const { data, fetchMore, networkStatus, } = useBooksQuery({
    //     variables: { first: 1,cursor:String(Number(number)-1) },
    //     notifyOnNetworkStatusChange: true
    //   });

  return (
      
      <>
      {/* <div>{payload}</div>
    <div>{JSON.stringify(data)}</div>  */}
     </>
    

  )
}

export default Postpage