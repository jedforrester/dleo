import React, {Component} from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state= {
             sections: [
                {
                  title: 'daily hacks',
                  imageUrl: 'https://www.youngliving.com/blog/wp-content/uploads/2018/03/blog-20-oils-under-20_Q3-Repost_Header_US_Ae_0818.jpg',
                  id: 1,
                  size: 'large',
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'cleaning & diffusing',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  size: 'large',
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'health & wellness',
                  imageUrl: 'https://www.youngliving.com/blog/wp-content/uploads/2019/12/blog-Get-your-fitness-on-Essential-oils-to-boost-your-workout_Header_US.jpg',
                  id: 3,
                  size: 'large',
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'fur babies',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'get started!',
                  imageUrl: 'https://static.youngliving.com/productimages/large/26666.jpg',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render () {
        return (
            <div className='directory-menu'>
            {
                this.state.sections.map( ({title, imageUrl, id, size, linkUrl})  => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                ))
            }

            </div>
        )
    }
}

export default Directory;