import React from 'react';
import { usePostData } from '../../hooks/usePostsData';

interface IPostContextData {
  id?: string;
  author?: string;
  title?: string;
  rating?: number;
  avatar?: string;
  subreddit?: string;
  previewImg?: string;
  datePostUtc?: number;
}

export const postContext = React.createContext<Array <IPostContextData>>([{}]);

export function PostContextProvider({ children }: { children: React.ReactNode}) {
  const [data] = usePostData()
  return (
    <postContext.Provider value={data}>
      {children}
    </postContext.Provider>
  )
}