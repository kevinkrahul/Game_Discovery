import { Button, Menu,MenuButton,MenuItem,MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortGames = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By
        </MenuButton>
        <MenuList>
          <MenuItem>Most Popular</MenuItem>
          <MenuItem>Recently Released</MenuItem>
          <MenuItem>Upcoming</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortGames          