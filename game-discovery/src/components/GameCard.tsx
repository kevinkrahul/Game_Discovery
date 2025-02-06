import { Game } from '@/hooks/useGames';
import { Card,Image,CardBody,HStack,Heading} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImage from '../Services/image-url';
import Emoji from './Emoji';


interface props{
    game:Game
}

const GameCard = ({game}:props) => {

  return (
    <Card >
        <Image src={getCroppedImage(game.background_image) } />
        <CardBody>
            <HStack justifyContent={'space-between'} marginBottom={3}>
            <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>{game.name }
                <Emoji rating={game.rating_top} />
            </Heading>
        </CardBody>
    </Card>)
}

export default GameCard