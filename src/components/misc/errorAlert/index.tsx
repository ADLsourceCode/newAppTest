/* eslint-disable */ 
import React from 'react';
import { Text,Alert, VStack, HStack } from 'native-base';
import { ErrorAlertProps } from '../../../utils/types';


export  const  ErrorAlert = ({ errorMessage }: ErrorAlertProps) => {
  return (
    <Alert status="error">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            <Text fontSize="md">
              {errorMessage}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Alert>
  );
};

