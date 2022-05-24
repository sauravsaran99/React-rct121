

import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Box, Text } from '@chakra-ui/react'
function App() {
  // const breakpoints = {
  //   sm: '30em',
  //   md: '48em',
  //   lg: '62em',
  //   xl: '80em',
  //   '2xl': '96em',
  // }
  return (
    <ChakraProvider>
    <Flex h="100vh" direction={{
      base:"column",
      sm:"column",
      md:"column",
      lg: "row",
    }} color='white'>
    <Flex flex=".2" justify="center" align="center" bg='skyblue'>
    <Text>NAV</Text>
  </Flex>
  <Flex flex=".6" justify="center" align="center" bg='green'>
    <Text>WIDGET</Text>
  </Flex>
  <Flex flex=".2" justify="center" align="center"  bg='red'>
    <Text>CONTENT</Text>
  </Flex>
</Flex>
    </ChakraProvider>
  );
}

export default App;
