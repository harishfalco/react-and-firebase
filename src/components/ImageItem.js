import React ,{useState} from 'react';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup'
import Image from 'react-bootstrap/Image';
import './css/card.css';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import  Alert  from 'react-bootstrap/Alert';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  
const ImageItem = ({items}) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Carousel breakPoints={breakPoints}>
            {    
                items.map((image)=>
                  <div  className="main-card">
                  <img src={image.src} className="card-image" />
                  <h4 className="card-name">{image.name}</h4> 
                  <h6 className="card-price">&#x20B9; {image.price}</h6>
                  <button class="card-btn">Add to cart</button>
                  <div style={{display:'flex'}}>
                    <a  href='javascript:void(0)' onClick={() => setShow(true)} className="card-a" >
                            More info
                    </a>
                    {/* </Button> */}
                    
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                            </p>
                        </Modal.Body>
                    </Modal>

                  </div>
                  </div>
                )
            }
            </Carousel>
        </div>
    )
}

export default ImageItem
