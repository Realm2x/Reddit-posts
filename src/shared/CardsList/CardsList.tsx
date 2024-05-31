import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

export function CardsList() {
  const [posts, setPosts] = useState<any[]>([]);
  const token = useSelector<RootState, string>(state => state.token);
  const [loading, setLoading] = useState(false);
  const [erorrLoading, setErorrLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [countLoading, setCountLoading] = useState(1);
  const [visible, setVisible] = useState(false);

  const bottomOfList = useRef<HTMLDivElement>(null);

  const post = posts.map((post) => {
    return <Card
      key={post.data.id} 
      postId={post.data.id}
      title={post.data.title}
      author={post.data.author}
      rating={post.data.ups}
      avatar={post.data.sr_detail.icon_img}
      subreddit={post.data.subreddit}
      previewImg={post.data.preview
        ? post.data.preview.images?.[0].source.url.replace(
          /(\&amp\;)/g,
          "&"
          )
        : ""}
      datePostUtc={post.data.created_utc}
    />
  })

  function handleClick() {
    setVisible(false);
    setCountLoading(prevCount => prevCount + 1);
  }
  
  useEffect(() => {
    async function load() {
      setLoading(true);
      setErorrLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `Bearer ${token}`},
          params: {
            limit: 10,
            after: nextAfter,
          }
        });
        setCountLoading(prevCount => prevCount + 1);
        
        setNextAfter(after)
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        setErorrLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && countLoading % 4 !== 0) {
        load();
      } else if (entries[0].isIntersecting && countLoading % 4 === 0) {
        setVisible(true);
      }
    }, {
      rootMargin: '10px',
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    }
  }, [bottomOfList.current, nextAfter, token, countLoading]);



  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !erorrLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}

      {post}

      <div ref={bottomOfList} />

      {visible && (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={handleClick} className={styles.cardsListButton}>Загрузить еще!</button>
        </div>
      )}

      {loading && (
        <div style={{textAlign: 'center'}}>'Загрузка...'</div>
      )}

      {erorrLoading && (
        <div role="alert" style={{textAlign: 'center'}}>
          {erorrLoading}
        </div>
      )}
    </ul>
  )
}
