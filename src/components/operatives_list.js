import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className='text-center'>Operatives list</h1>
        <ol>
            <li>Jim</li>
            <li>Kim</li>
            <li>Tim</li>
            <li>Lim</li>
            <li>Him</li>
        </ol>
    </div>
);

export default auth(OpList);