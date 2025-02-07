import { List, ListItem, Skeleton } from "@chakra-ui/react";
// import {SkeletonCircle} from "@chakra-ui/react";
const GenresSkeleton = () => {
  return (
    <List>
      <ListItem paddingY={'5px'}>
        <Skeleton height={10} borderRadius={3}/>
      </ListItem>
    </List>
  );
};

export default GenresSkeleton;
