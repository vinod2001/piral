import * as React from 'react';
import {sendEmit} from './sendEmit';
import {PageComponentProps} from 'my-app';


// function detailsWrapper(){
//     return (
//                     <div>
//                         <button onClick={(e)=>sendEmit(e)}>Page1</button>
//                     </div>
//                 )
// }    
const DetailsWrapper: React.FC<PageComponentProps & {data:any}> = ({data, piral}) =>(
    <div>
        <button>hello</button>
    </div>
);

 export default DetailsWrapper;