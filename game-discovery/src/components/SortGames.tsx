import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSort: (Sortorder: string) => void;
  onSelectedSort: String;
}

const SortGames = ({ onSelectSort, onSelectedSort }: Props) => {
  

  const sortorder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentsordorder = sortorder.find(
    (order) => order.value === onSelectedSort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentsordorder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortorder.map((sort) => (
          <MenuItem
            onClick={() => onSelectSort(sort.value)}
            key={sort.value}
            value={sort.value}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortGames;
