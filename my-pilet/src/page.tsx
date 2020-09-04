// @flow 
import * as React from 'react';
// import {sendEmit} from './sendEmit'
type Props = {
    
};
export default ({piral}) => {
    // const ac = new AbortController();
    const [data, setData] = React.useState([]);
    // console.log("newPage:",data);

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    React.useEffect(()=>{
        fetch(apiUrl).then(res => res.json()).then(data => {setData(data)}).catch(error=>error.data);
       // return () => ac.abort();
    },[])
    // const connect: any = app.createConnector(() =>
      
    // );
    const page= {
        "title": document.title,
        "url": window.location.origin,
        "loadTime": "2sec" 
      }

    return (
        <div>
            
            <h1>My Page</h1>
            <p>This some example test....</p>
            <button onClick={(e)=>{piral.trackEvent({page}),alert(e)}}>Page1</button>
            <button onClick={(e)=>piral.trigerEvent(piral.AMPLITUDE_EVENT_TYPES.EVENT_TYPE,e)}>Page2</button>
            <ul>
                {data.map(res=> (
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    );
};