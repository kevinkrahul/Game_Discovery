import { Card,Skeleton,SkeletonText,CardBody } from '@chakra-ui/react'
import React from 'react'

const GameCarSkeleton = () => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'} width={'300px'}> 
        <Skeleton height={'200px'} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
  }

export default GameCarSkeleton;