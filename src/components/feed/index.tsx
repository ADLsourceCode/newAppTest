/* eslint-disable */ 
import React, {Key, useEffect} from 'react';
import {useColorScheme, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsFeed} from '../../redux/actions';
import styles from './styles';
import uuid from 'react-native-uuid';
import { useState,useCallback } from 'react';

import { NewsArticle } from '../../utils/types';
import { FlatList, Heading, Spinner,Center,HStack,Switch,Alert, VStack,Text, useColorMode } from 'native-base';
import { RefreshControl } from 'react-native';
import { NewsTags } from '../newCategory';
import { AR, EN, NEWS_FEED, NO_DATA_FOUND, NewsCategory, SOMETHING_WENT_WRONG,} from '../../utils/constants';
import {customTheme} from '../../utils/theme';

import { ErrorAlert, Header, LanguageSwitcher } from '../misc/';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Feed: React.FC = () => {
  const colors = customTheme.colors;
  const {newsFeed} = useSelector((state: any) => state.feedReducer);
  const dispatch: Function = useDispatch();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [errorMessage,setErrorMessage] = useState<string>("");
  const [pageSize,setpageSize] = useState<number>(15);
  const [page,setPage] = useState<number>(1);
  const [language,setLanguage] = useState<string>("en");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    NewsCategory.apple,
  );
  const {
    colorMode,
    toggleColorMode
  } = useColorMode();

  useEffect(() => {
    
    dispatch(getNewsFeed({setIsLoading,setErrorMessage,pageSize,page,language,q:selectedCategory}));
  }, [dispatch,language,selectedCategory]);


  
  const backgroundColor = colorMode === 'dark' ? colors.grey[600] : colors.white;
  return (
    <SafeAreaView style={[{backgroundColor}]} >
    <View style={[styles.container,{backgroundColor}]}>
      <View style={[styles.container,{backgroundColor}]}>
      <Header/>

<LanguageSwitcher
setLanguage = {setLanguage}
language ={language}
/>
    
  
    <HStack style={styles.newTagStyle}>
    <NewsTags
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
      />
      </HStack>
      {isLoading?(
        <Spinner  size="lg" />
    ):
    errorMessage.length>0?(
      <ErrorAlert errorMessage={SOMETHING_WENT_WRONG} />
    )
    :newsFeed.length==0?(
      <Center>
<Text>{NO_DATA_FOUND}</Text>
</Center>
    ):(
    <View style={[styles.listContent]} >
    <FlatList
      keyExtractor={(item: NewsArticle, index: Key) => uuid.v4().toString()}
      showsVerticalScrollIndicator={false}
      
      data={newsFeed}
      
  onEndReachedThreshold={0.2}
  
     
      renderItem={({item,index}) => (
        
         <Text>
          {item.title}
         </Text>
      )}
      style={styles.list}
    />
    </View>
    )}
   
  </View>
    </View>
    </SafeAreaView>
  );
};