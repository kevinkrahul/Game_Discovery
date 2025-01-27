import { Card,Skeleton,SkeletonText,CardBody } from '@chakra-ui/react'

const GameCarSkeleton = () => {
  return (
    <Card> 
        <Skeleton height={'200px'} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
  }

export default GameCarSkeleton;