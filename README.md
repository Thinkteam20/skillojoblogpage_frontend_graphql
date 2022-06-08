Project template generated with react creat app typescript template 

App.tsx handles the routing.
It imports pages and componenets which are in their respective folders.

Pages means the main home page and the article view page.

sorry the css is a bit all over the place.

I used apollo client.
query.ts is only used to specify my quries and then by runnign npm run codegen(as defined in json.package), it will generate the types and react hooks for me automatically which is in the generated folder.

Problems I have:
1, infinite loading, when i inspect network request, i send more than 1 request everytime I load more data, and on loading the page intially, there are 40+ requests made and I am not sure where are they coming from. 

I can't manage to put fetchmore in a react use effect hook as the results are unpredictable. 
i am not sure why that is the case, I circumvent it by clicking a button which call fetchmore and disabling it right after for 3000ms. as if i dont do that, it will keep pressing the button (I suspect the useeffect hook is called mutiple times causing this behaviour but why that is I dont know, I only started to use react 2 weeks ago, sorry about that!)

I am skeptical of the way I architect my code and I am sure it is not best practices, please advise how can I improve !!


