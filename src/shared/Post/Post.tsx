import React, { useEffect, useRef } from 'react';
import styles from './post.css';
import ReactDOM from 'react-dom';
import { CommentBlock } from '../CommentBlock';
import { useCommentPostData } from '../../hooks/useCommentPost';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';
import { useLocation, useHistory } from 'react-router-dom';

type LocationState = { subreddit: string; postId: string;};

export function Post() {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  
  const location = useLocation()
  const {subreddit} = location.state as LocationState
  const {postId} = location.state as LocationState

  const [postComments] = useCommentPostData({subreddit, postId})

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        history.push('/posts');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  const commentBlock = postComments.map((comment) => {
    return <CommentBlock id={comment.id} author={comment.author} body={comment.body} created={comment.created} key={comment.id}  />
  })

  return ReactDOM.createPortal((
    <div className={styles.modalWrapper}>
      <div className={styles.modal} ref={ref} >
        <h2 className={styles.titleContent}>Следует отметить, что новая модель организационной деятельности поможет</h2>

        <div className={styles.content}>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
        </div>
        
        <CommentFormContainer />

        {commentBlock}
      </div>
    </div>
  ), node);
}
