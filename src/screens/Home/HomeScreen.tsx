import {Avatar, Box, HStack, Spacer, Text, VStack} from 'native-base';
import React from 'react';
import {FormatCurrency} from '../../helpers/FormatCurrency';

const HomeScreen = () => {
  return (
    <Box>
      <HStack padding={5}>
        <Avatar
          alignSelf="center"
          bg="amber.500"
          size="lg"
          source={{
            uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}>
          AK
        </Avatar>
        <VStack justifyContent="center" marginLeft={3}>
          <Text>Kieu Thi Hue</Text>
          <Text>Saleman</Text>
        </VStack>
        <Spacer />
        <VStack justifyContent="center">
          <Text>Han muc</Text>
          <Text>{FormatCurrency(2000000)}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export default HomeScreen;
