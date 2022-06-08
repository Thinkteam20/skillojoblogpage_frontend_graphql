
import { NexusGenObjects } from "../../nexus-typegen";  
import { extendType, nonNull, objectType, stringArg, intArg } from "nexus";  
import { PrismaClient } from '@prisma/client' 
import { Context } from '../context'

export const Articles = objectType({
    name: "Articles", // <- Name of your type
    definition(t) {
        t.nonNull.string("id"); 
        t.nonNull.string("title"); 
        t.nonNull.string("body"); 
        t.nonNull.int("v"); 
        
        
    },
});



export const LinkQuery = extendType({  // 2
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("articlefeed", {   
            type: "Articles",
            args: {
                  
                skip: intArg(),   
                take: intArg(),
                cursor:stringArg(),   
            },
            resolve(parent, args, context, info) {   
                if(args?.cursor){
                    return context.prisma.articles.findMany({

                        skip: args?.skip as number | undefined,    // 2
                        take: args?.take as number | undefined,
                        cursor: {   
                            id: args?.cursor as string | undefined,
                          }
                        
                        
                    });

                }
                else{
                    return context.prisma.articles.findMany({

                            // 2
                        take: args?.take as number | undefined,
                        
                        
                        
                    });

                }
                
            },
        });
    },
});


// export const LinkMutation = extendType({  // 1
//     type: "Mutation",    
//     definition(t) {
//         t.nonNull.field("post", {  // 2
//             type: "Link",  
//             args: {   // 3
//                 description: nonNull(stringArg()),
//                 url: nonNull(stringArg()),
//             },
            
//             resolve(parent, args, context) {    
//                 const { description, url } = args;  // 4
                
//                 let idCount = links.length + 1;  // 5
//                 const link = {
//                     id: idCount,
//                     description: description,
//                     url: url,
//                 };
//                 links.push(link);
//                 return link;
//             },
//         });
//     },
// });