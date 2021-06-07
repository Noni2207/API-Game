import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import {popup} from '../animations';

const Game = ({name, released, image, id}) => {
    const stringPathId = id.toString()
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
     document.body.style.overflow = "hidden";
     dispatch(loadDetail(id));
    };

    return (
        <StyledGame variants={popup} 
        initial="hidden" 
        animate="show" 
        layoutId={stringPathId} 
        onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
              <h3>{name}</h3>
              <p>{released}</p>
              <motion.img 
              layoutId={`image ${stringPathId}`} 
              src={smallImage(image, 640)} 
              alt={name} />
            </Link>
        </StyledGame>
    );
};
const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
img {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
@media (max-width: 770px) {
  max-width: 50vh;

  
}
@media (max-width: 500px) {
  max-width: 30vh;
  h3 {
    font-size: 1rem;
    font-weight: 700;
  }
  p{  
    font-size: 0.8rem;  
  } 
}

}
`;


export default Game;