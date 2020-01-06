import React from 'react';
import {Helmet} from 'react-helmet';

import './collection-item.styles.scss';

const CollectionItem = ({imageUrl, name, price}) => (
    <div className='collection-item'>
        <Helmet>
            <title>{name}</title>
            <meta name='homepage description from helmet' content={name}/>
        </Helmet>
        <div 
            className='image'
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div> 

    </div>
);

export default CollectionItem