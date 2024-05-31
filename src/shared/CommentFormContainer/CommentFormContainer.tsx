import React from 'react';
import { CommentForm } from '../CommentForm';

interface ICommentForm {
  author?: string;
}

export function CommentFormContainer({author}: ICommentForm) {
  return (
    <CommentForm
      author={author}
    />
  );
}