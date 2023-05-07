/* eslint-disable */ 
import moment from 'moment';
import React from 'react';
import { Platform, TouchableOpacity} from 'react-native';
import styles from './styles';
import { NewsArticle } from '../../utils/types';
import {Image, Avatar, Box, HStack, Spacer, Text, VStack,Stack,Center,Heading } from 'native-base';
import {customTheme} from '../../utils/theme';
import { Linking } from 'react-native';
import { useToast } from 'native-base';
import { IMAGE_PLACEHOLDER } from '../../utils/config';
import { ERROR_OCCURED_WHILE_OPENING } from '../../utils/constants';

 const NewsArticleItem: React.FC<{
    news: NewsArticle;
  }> = ({news}) => {
    const colors = customTheme.colors;
    const toast = useToast();

    const openArticle = (url: string) => {

        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              toast.show({ description: ERROR_OCCURED_WHILE_OPENING });
            }
          });

    }


        return (
            <TouchableOpacity
            onPress={() => openArticle(news.url)}
            >
            <Stack style={styles.container} direction={["column", "column", "row"]} 
            rounded="lg" overflow="hidden" 
            height={["96", "96", "48"]} shadow="1" _light={{
                backgroundColor: colors.grey[100]
              }} _dark={{
                backgroundColor: colors.grey[700]
              }}>
                  <Box w={["100%", "100%", "40"]} h={["50%", "50%", "48"]}>
                    <Image w={["100%", "100%", "40"]} h="100%" source={{
                    uri: news.urlToImage??IMAGE_PLACEHOLDER, }}
                    
                  alt="image" />
                   
                  </Box>
                  <Stack flex="1" p="4" space={[3, 3, 1]} justifyContent="space-around">
                    <Stack space="2">
                      <Heading noOfLines={2} size="xs" ml="-1">
                        {news.title}
                      </Heading>
                      <Text fontSize="xs" marginTop={1} noOfLines={1} color={colors.burnt_sienna[900]}
                       _dark={{
                        color: colors.champagne_pink[900]
                      }}
                      fontWeight="500" ml="-0.5" mt="-1">
                        {news.source.name}
                      </Text>
                    </Stack>
                    <Text marginTop={1} noOfLines={3} fontSize={'sm'}>
                      {`${news.content}...`}
                    </Text>
                    <HStack alignItems="center" space="4" justifyContent="space-between">
                      <Text color={colors.burnt_sienna[900]}  fontSize={'sm'}  _dark={{
                      color: colors.champagne_pink[900]
                    }} fontWeight="400">
                        {news.publishedAt.split("T")[0]}
                      </Text>
                    </HStack>
                  </Stack>
                </Stack>
                </TouchableOpacity>
        );
}

export default NewsArticleItem;