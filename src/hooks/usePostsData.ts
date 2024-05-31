import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

interface IPostData {
  id?: string;
  author?: string;
  title?: string;
  rating?: number;
  avatar?: string;
  subreddit?: string;
  previewImg?: string;
  datePostUtc?: number;
}

export const usePostData = () => {
  const [data, setData] = useState<Array<IPostData>>([]);
  const token = useSelector<RootState, string>(state => state.token);

  useEffect(() => {
    if(token && token.length > 0 && token !== "undefined") {
      axios
        .get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `Bearer ${token}`},
        })
        .then((resp) => {
          const userData = resp.data.data.children.map(
            (item: { data: any }) => ({
              id: item.data.id,
              author: item.data.author,
              title: item.data.title,
              rating: item.data.ups,
              avatar: item.data.sr_detail.icon_img,
              subreddit: item.data.subreddit,
              previewImg: item.data.preview
                ? item.data.preview.images?.[0].source.url.replace(
                  /(\&amp\;)/g,
                  "&"
                  )
                : "",
              datePostUtc: item.data.created_utc,  
            })
          );
          setData(userData);
        })
        .catch(console.log);
    }
  }, [token])
  
  return [data];
};