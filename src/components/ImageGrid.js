import React from 'react'
import ImageItem from './ImageItem';

const items = [{
    'src': 'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d',
    'price':150,
    'name':"Coconut Oil - 500 ml"
  }, {
    'src': 'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d',
     'price':150,
    'name':"Coconut Oil - 500 ml"
  }, {
    'src':'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d' ,
    'price':150,
    'name':"Coconut Oil - 500 ml"
  }, {
    'src': 'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d',
    'price':150,
    'name':"Coconut Oil - 500 ml"
  },
  {
    'src': 'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d',
    'price':150,
    'name':"Coconut Oil - 500 ml"
  }, {
    'src': 'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d',
     'price':150,
    'name':"Coconut Oil - 500 ml"
  }, {
    'src':'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d' ,
    'price':150,
    'name':"Coconut Oil - 500 ml"
  }, {
    'src': 'https://s.yimg.com/sr/img/1/0b7db493-b987-3687-bc28-45962894246d',
    'price':150,
    'name':"Coconut Oil - 500 ml"
  }
];

const ImageGrid = () => {
    return (
        <div>
            <ImageItem items={items} />
            {/* {console.log(items[0].name)} */}
        </div>
    )
}

export default ImageGrid
