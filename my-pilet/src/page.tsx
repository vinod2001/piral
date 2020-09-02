// @flow 
import * as React from 'react';
// import {sendEmit} from './sendEmit'
type Props = {
    
};
export default ({data}) => {
    return (
        <div>
            
            <h1>My Page</h1>
            <p>This some example test....</p>
            {/*<button onClick={(e)=>sendEmit(e)}>Page1</button>*/}
            <ul>
                {data.map(res=> (
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    );
};