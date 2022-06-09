import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homepage from "./pages/Home"
import Postpage from "./pages/postpage"
import Navbar from './components/navbar'
import Footer from "./components/footer"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          // Don't cache separate results based on
          // any of this field's arguments.
          

          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing , incoming) {
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: cache
});


export interface IApplicationProps{}

const Application: React.FunctionComponent<IApplicationProps>=(props)=>{

return(
<ApolloProvider client={client}>
    <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/posts" element={<Postpage/>}>
                <Route index element ={<Postpage/>}/>
                <Route path=":number" element={<Postpage/>}/>



            </Route>

            
        </Routes>
        <Footer></Footer>

    
    </BrowserRouter>
    </ApolloProvider>
)

}

export default Application