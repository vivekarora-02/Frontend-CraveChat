import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
  justifyContent="center"
  alignItems="center"
  p={3}
  bg="#c6a8d7"
  w="100%"
  mt="40px"
  mb="30px"
  borderRadius="lg"
  borderWidth="1px"
>
  <Text textAlign="center" fontSize="4xl" fontFamily="Lato, sans-serif" color="#2e2e2e">
    CraveChat
  </Text>
  <Text textAlign="center">
    <Text fontSize="1xl" fontFamily="Open Sans, sans-serif" fontStyle="italic" color="#2e2e2e" mt={1}>
      &ldquo;Chatting just got a lot more flavorful with CraveChat!&rdquo;
    </Text>
  </Text>
</Box>

      <Box bg="White" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;