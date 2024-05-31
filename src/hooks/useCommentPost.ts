import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface IPostData {
  id?: string;
  title?: string;
  author?: string;
  key?: string;
  body?: string;
  created?: number;
  parent_id?: string;
}

interface ICommentPostData {
  subreddit?: string;
  postId?: string;
}

export const useCommentPostData = ({subreddit, postId}: ICommentPostData) => {
  const [data, setData] = useState<Array<IPostData>>([]);
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() =>{
    if(token && token.length > 0 && token !== "undefined") {
      axios.get(`https://api.reddit.com/r/${subreddit}/comments/${postId}`)
      .then((resp) => {
        const userData = resp.data[1].data.children.map(
          (item: any) => ({
            id: item.data.id,
            author: item.data.author,
            body: item.data.body,
            created: item.data.created_utc,
            parent_id: item.data.parent_id
          })
        );
        setData(userData);
      })
      .catch(console.log);
    }
  }, [token])
  
  return [data];
}