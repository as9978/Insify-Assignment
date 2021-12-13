import React, { Fragment, useState } from "react";
import { Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import { search } from "api/search";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const { data, status } = search({ q: searchValue });

  return (
    <Flex width="61%" flexDirection="column">
      <Flex>
        <Input
          placeholder="Search ..."
          value={searchValue}
          onChange={(e) => {
            e.preventDefault();
            setSearchValue(e.target.value);
          }}
        />
        <Button onClick={() => setQuery(searchValue)}>Search</Button>
      </Flex>
      <Flex
        marginTop="16px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {status === "loading" ? (
          <Spinner size="md" />
        ) : status === "error" ? (
          <Text fontSize="16px">Something is wrong!</Text>
        ) : (
          data && (
            <Fragment>
              {data.map((company, index) => (
                <Flex key={index} flexDirection="row">
                  <Text>{company.handelsnaam}</Text>
                  <Text> - </Text>
                  <Text>{company.plaats}</Text>
                </Flex>
              ))}
            </Fragment>
          )
        )}
      </Flex>
    </Flex>
  );
};

export default Search;
