/* eslint-disable */ 

import { useToast } from 'native-base';
import { apiClient } from '../api';
import moment from 'moment';
import { GetNewsFeedParams } from '../utils/types';
import { GET_NEWS_FEED, PUBLISHED_AT, SOMETHING_WENT_WRONG } from '../utils/constants';


export const getNewsFeed = (
  {
    setIsLoading,
    setErrorMessage,
    pageSize,
    page,
    language,
    q,
  }: GetNewsFeedParams
) => async (dispatch: Function) => { 

  
  
  try {
    
    var from = moment().subtract(29, 'days').format("YYYY-MM-DD"); 
    var sortBy = PUBLISHED_AT; 

    
    setErrorMessage('');
    setIsLoading(true);

    
    const res = await apiClient.get(
      `?language=${language}&q=${q}&from=${from}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`,
    );

    
    setIsLoading(false);
    

    
    if (res.status === 200) {
      dispatch({
        type: GET_NEWS_FEED,
        payload: res?.data?.articles, 
      });
    } else {
      
      setErrorMessage(SOMETHING_WENT_WRONG)
      console.warn(SOMETHING_WENT_WRONG);
    }
  } catch (error) {
    
    setErrorMessage(SOMETHING_WENT_WRONG)
    setIsLoading(false);
    console.error(error);
  }
};


