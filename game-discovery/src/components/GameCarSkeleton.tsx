import { Card,Skeleton,SkeletonText,CardBody } from '@chakra-ui/react'

interface Props{
  children:string;
  
}

const GameCarSkeleton = ({children}:Props) => {
  return (
    <Card> 
        <Skeleton height={children} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
  }

export default GameCarSkeleton;