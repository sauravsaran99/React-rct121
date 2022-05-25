

import { ChakraProvider } from '@chakra-ui/react'
import { Flex, Text } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
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
    <Flex h="50vh" direction={{
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
<Grid h="50vh" templateColumns={{
  base: 'repeat(1, 1fr)',
  sm: 'repeat(1, 1fr)',
  md: 'repeat(3, 1fr)',
  lg:'repeat(3, 1fr)'
}} gap={6}>
  <GridItem w='100%' rowSpan={2} colSpan={2} h='44vh' bg='#0C2340' />
  <GridItem w='100%' rowSpan={3} h='70vh' bg='orange' />
  {/* <GridItem w='100%' h='20vh' bg='blue.500' /> */}
  <GridItem w='100%' colSpan={2} h='20vh' bg='blue.500' />
  {/* <GridItem w='100%' h='20vh' bg='blue.500' /> */}
</Grid>
    </ChakraProvider>
  );
}

export default App;
