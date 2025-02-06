import medal from '../assets/medal.png';
import checked from '../assets/checked.png';
import like from '../assets/like.png';
import { Image, ImageProps } from '@chakra-ui/react';


interface Props{
    rating:number;
}

const Emoji = ({rating}:Props) => {
  
  if(rating < 3) return null;

    const emojiMap:{[key:number]:ImageProps}={
    3:{src:like,alt:'like', boxSize:'25px'},
    4:{src:checked,alt:'checked',boxSize:'25px'},
    5:{src:medal,alt:'medal',boxSize:'25px'}    
    }

    return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}

export default Emoji