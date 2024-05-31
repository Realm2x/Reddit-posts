import React, { useState } from 'react';
import styles from './commentblock.css';
import { CommentUser } from './CommentUser';
import { CommentContent } from './CommentContent';
import { CommentButtons } from './CommentButtons';
import { UpButton } from './UpButton';
import { DownButton } from './DownButton';
import { CommentFormContainer } from '../CommentFormContainer';
import { commentContext } from '../context/commentContext';

interface ICommentBlock {
  id?: string;
  author?: string;
  body?: string;
  created?: number;
}

export function CommentBlock({id, author, body, created}: ICommentBlock) {
  const [isCommentFormOpen, setIsCommentFormOpened] = useState(false);
  
  const [commentValue, setCommentValue] = useState('');
  const CommentProvider = commentContext.Provider;

  const handleOpen = () => {
    setIsCommentFormOpened(!isCommentFormOpen);
  }

  return (
    <div id={id} key={id} className={styles.commentBlock}>
      <div className={styles.commentMarkup}>
        <div className={styles.commentGroupButton}>
          <UpButton />
          <DownButton />
        </div>
        <span className={styles.commentLine}></span>
      </div>
      <div className={styles.commentCardContent}>
        <CommentUser author={author} created={created}/>
        <CommentContent body={body}></CommentContent>
        <CommentButtons onClick={handleOpen}/>
         
        {isCommentFormOpen && (
          <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
          }}>
            <CommentFormContainer author={author}/>
          </CommentProvider>
        )}
      </div>
    </div>
  );
}
