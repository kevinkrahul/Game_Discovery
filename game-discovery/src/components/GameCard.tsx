import { Game } from '@/hooks/useGames';
import { Card,Image,CardBody,HStack,Heading} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImage from '../Services/image-url';


interface props{
    game:Game
}

const GameCard = ({game}:props) => {

  return (
    <Card >
        <Image src={getCroppedImage(game.background_image) } />
        <CardBody>
            <Heading fontSize='2xl'>{game.name }</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>)
}

export default GameCard