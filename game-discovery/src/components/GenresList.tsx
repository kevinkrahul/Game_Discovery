import {
  List,
  Image,
  ListItem,
  HStack,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../Services/image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  // const skeleton = Array([1,20]);
  const skeleton = [...Array(15).keys()].map((i) => i + 1);

  return (
    <>
      <List>
        {isLoading &&
          skeleton.map((skeleon) => <GenresSkeleton key={skeleon} />)}
        {data.map((gen) => (
          <ListItem key={gen.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImage(gen.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                variant={"link"}
                onClick={() => onSelectGenre(gen)}
                fontSize="lg"
              >
                {" "}
                {gen.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
