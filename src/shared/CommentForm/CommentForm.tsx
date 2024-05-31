import React, { ChangeEvent, useEffect, useRef } from 'react';
import { Formik, Form, FormikErrors } from 'formik';
import styles from './commentform.css';
import { useRecoilState } from 'recoil';
import { textState } from '../../state';


type Props = {
  author?: string;
}

interface MyFormValues {
  comment: string;
}

export function CommentForm({author}: Props) {
  const [comment, setComment] = useRecoilState(textState);
  const initialValues: MyFormValues = {comment: comment};

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [])

  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setComment(values.comment);
        setSubmitting(false)
      }}
      validate={values => {
        let errors: FormikErrors<MyFormValues> = {};
        if (!values.comment) {
          errors.comment = 'Поле пустое!';
        } else if (values.comment.trim().length < 3) {
          errors.comment = 'Введите больше 2-х символов';
        }
        return errors;
      }}
      >
      {({ isSubmitting, handleChange, handleBlur, errors, touched, values }) => (
        <Form className={styles.form} >
          <textarea
            name="comment"
            className={styles.input}
            value={values.comment || author }
            onChange={handleChange}
            onBlur={handleBlur}
            ref={ref}
          />
          {errors.comment && touched.comment && errors.comment}

          <button type="submit" className={styles.button} disabled={isSubmitting} >Комментировать</button>
        </Form>
      )}
    </Formik>
    <div> {comment} </div>
    </>
  );
}
