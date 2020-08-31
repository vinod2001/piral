// @flow 
import * as React from 'react';
type Props = {
    
};
export default ({data}) => {
    return (
        <div>
            <h1>My Page</h1>
            <p>This some example test....</p>
            <ul>
                {data.map(res=> (
                    <li key={res.id}>{res.title}</li>
                ))}
            </ul>
        </div>
    );
};