// @flow 
import * as React from 'react';
// import {sendEmit} from './sendEmit'
type Props = {
    
};
export default ({piral}) => {
    const ac = new AbortController();
    const [data, setData] = React.useState([]);
    // console.log("newPage:",data);

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    React.useEffect(()=>{
        fetch(apiUrl).then(res => res.json()).then(data => {setData(data)}).catch(error=>error.data);
        return () => ac.abort();
    })
    // const connect: any = app.createConnector(() =>
      
    // );

    return (
        <div>
            
            <h1>My Page</h1>
            <p>This some example test....</p>
            <button onClick={(e)=>piral.trackEvent({pageUrl:window.location.origin})}>Page1</button>
            <ul>
                {data.map(res=> (
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    );
};