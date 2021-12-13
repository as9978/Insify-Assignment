import { Flex } from "@chakra-ui/react";

import SearchInput from "../components/search"

export default function Home() {
  return (
    <Flex
      flex={1}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <SearchInput />
    </Flex>
  );
}
