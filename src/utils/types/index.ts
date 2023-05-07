// We need to declare global here due to the imported type above
// Using imports in a file will force typescript to declare the file as a module, meaning everything will be locally scoped
// This way, we're telling typescript that everything here should be global
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
// @ts-ignore

export interface NewsArticle {
    source: {
      id: string | null;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  export interface TagProps {
    category: string;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
  }
  

  export interface NewsCategoryTypes {
    [key: string]: string;
  }
  export type LanguageSwitcherProps = {
    setLanguage: (language:string) => void;
    language: string;
  };

 export interface GetNewsFeedParams  {
    setIsLoading: (isLoading: boolean) => void;
    setErrorMessage: (errorMessage: string) => void;
    pageSize: number;
    page: number;
    language: string;
    q: string;
  };

  export  type ErrorAlertProps = {
    errorMessage: string;
  };
  
