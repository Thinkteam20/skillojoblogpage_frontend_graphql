
import logo from './logo.svg';
import { useRef,useEffect,useState } from 'react';
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import '../App.css';
import '../mobile.css'

import {useBooksQuery} from "../generated/graphql"
import Card from "../components/Card"

import { GraphQLClient, ClientContext } from 'graphql-hooks'

import {NetworkStatus} from '@apollo/client';
import CSS from 'csstype';

const buttonStyles: CSS.Properties = {
  display: 'none'
  
};


function Home() {

  const listInnerRef = useRef<HTMLDivElement>(null);
  const buttonref = useRef<HTMLButtonElement>(null);
  const [count,setCount] = useState(0)
  const [disable, setDisable] = useState(false);
  let options = {
    root: null,
    rootMargin: "100px",
    threshold: 1
  };


useEffect(()=>{
  // console.log(listInnerRef)
  
  console.log("useeffect")
  const observer =new IntersectionObserver((entries)=>{
    const entry = entries[0]
    
    if(entry.isIntersecting===true &&data?.books.hasNextPage&&data  && networkStatus !== NetworkStatus.fetchMore){
      console.log("in")
      // this is the problem, I cant put fetchmore here 
      // for example if i put fetchmore(....), it will just blowup.

      
      


      buttonref.current?.click()
      
      
      
      
      setTimeout(() => {  setDisable(false); }, 2000);
      
      
      
    }
      
     
      
    
  },options)



  if (listInnerRef.current){
    observer.observe(listInnerRef.current)
    

  }
  
})


  const { data, fetchMore, networkStatus, } = useBooksQuery({
    variables: { first: 10 },
    notifyOnNetworkStatusChange: true
  });

  

  if (!data || !data.books) {
    return <div>"loading</div>;
  }

  //call this function when button is clicked
  const load = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisable(true)
    
    

    
    fetchMore({
      variables: {
        first: 10,
        cursor:
          data.books.books[data.books.books.length - 1].id
      },
      updateQuery: (pv, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return pv;
        }
        if ([...pv.books.books]==[...fetchMoreResult.books.books]) {
          return pv;
        }
        

        return {
          books: {
            __typename: "BooksResponse",
            books: Array.from(new Set([
              ...pv.books.books,
              ...fetchMoreResult.books.books
            ])),
            hasNextPage: fetchMoreResult.books.hasNextPage
          }
        };
      }
    })

    setCount(data.books.books.length)
  };



  return (
    <>
    
     <main ref={listInnerRef} id='content' className='content' >
        <div className='wraps'>
          <div  className='grid' >
            <div >
              {data.books.books.map(x=>(<Card id= {x.id} title={x.title}/>))}
              
              <button style={buttonStyles} ref={buttonref} disabled={disable}onClick={load}>Load more</button>
              
              
          
              
            </div>
          </div>
          
        </div>
        {networkStatus === 3 && data.books.hasNextPage&& <div className='loadinginfinitescroll'></div>}
        {!data?.books.hasNextPage && <div>the end</div>}
        
      </main>

      {<div ref={listInnerRef}>{`Target for infinite scroll`}</div>}
      
    
      
    </>
  )
}

export default Home;
