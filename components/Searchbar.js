import { Input, Button, ButtonGroup, HStack } from "@chakra-ui/react";
export default () => {
  return (
    <>
      <HStack color="white">
        <Input
          placeholder="What are you looking for?"
          size="lg"
          fontFamily="Inter"
        />
        <Button
          bg="#4e46e5"
          color="#ffffff"
          size="lg"
          width="200px"
          fontFamily="Inter"
          fontWeight="normal"
        >
          Search
        </Button>
      </HStack>
    </>
  );
};
