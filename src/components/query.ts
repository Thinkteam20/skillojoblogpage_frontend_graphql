//this  is where the apollo client will generate the react hook from running npm run codegen
//the react hooks can be used by importing it from /generated/graphql.tsx

import { gql } from '@apollo/client';

// export const QUERY_LAUNCH_LIST = gql`
//   query Books($cursor: String, $first: Int!) {
//   books(cursor: $cursor, first: $first) {
//     books {
//       id
//       title
//       author
//     }
//     hasNextPage
//   }
// }
// `;


export const QUERY_ARTICLES = gql`
  query Articles($cursor: String, $take: Int, $skip: Int) {
    articlefeed(cursor:$cursor,take:$take, skip:$skip) {
    id
    title
    
  }
  
}
`;


