import { List, Image, ListItem, HStack, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../Services/image-url";
import GenresSkeleton from "./GenresSkeleton";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
    // const skeleton = Array([1,20]);
    const skeleton = [...Array(15).keys()].map(i => i + 1);

    

  return (<>
    
    <List>
    {isLoading && skeleton.map((skeleon)=>(
        <GenresSkeleton />
    ))}
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImage(gen.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg"> {gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenresList;
