// @flow 
import * as React from 'react';
export default ({piral}) => {
    const [ data, setData ]= React.useState([]);
    
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    
    React.useEffect(() => {
        fetch(apiUrl).then(res => res.json()).then(data => {
            setData(data);
        })
    });

    return (
        <div>
            <h1>My Page</h1>
            <p>This some example test....</p>
            <button onClick={(e)=>piral.trackEvent({page: "Some smaple data"})}>Page1</button>
            <ul>
                {data.map(res=> (
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    );
};