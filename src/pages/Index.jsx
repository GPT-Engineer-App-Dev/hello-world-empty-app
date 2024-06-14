import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Hello World</Text>
      <Button as={Link} to="/dishes" colorScheme="teal" size="lg">
          Go to Dishes
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;