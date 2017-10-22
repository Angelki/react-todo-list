import React from 'react';
import {Link as RouteLink} from 'react-router-dom';
// const Link = ({children}) => (
//     <li>
//         <a href="/#">{children}</a>
//     </li>
// );

const Link = ({filter, children}) => (
    <li>
        <RouteLink to={"/" + filter} >
            {children}
        </RouteLink>
    </li>
)

export default Link;