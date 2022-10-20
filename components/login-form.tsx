/* eslint-disable @next/next/no-img-element */
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Image from 'next/image'
import styles from '../styles/Login.module.scss';

interface Values {
  username: string;
  password: string;
}

export default function LoginForm() {
  return (
    <div className={styles["login-container"]}>
      <div className={styles["login"]}>
        <a
          href="#"
          rel="noopener noreferrer"
          className={styles.devchallenges}
        >
          <img src="/devchallenges.svg" alt="devchallenges Logo" />
        </a>
        <h3>Join thousands of learners from around the world </h3>
        <p>Master web development by making real-life projects. There are multiple paths for you to choose </p>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}

        >
          <Form>
            <div className={styles["fields-container"]}>
              <Field className={styles.email} id="email" name="email" placeholder="Email" aria-describedby="emailHelp" />
              <Field className={styles.password} id="password" name="password" placeholder="Password" type="password" />
            </div>
            <button type="submit" className={styles["login-button"]}>Start coding now</button>
          </Form>
        </Formik>
        <p className={styles["small-gray-text"]}>or continue with these social profiles </p>
        <div className={styles["social-links"]}>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <img src="/Google.svg" alt="GITHUB Logo" />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <img src="/Facebook.svg" alt="GITHUB Logo" />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <img src="/Twitter.svg" alt="GITHUB Logo" />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
          >
            <img src="/Gihub.svg" alt="GITHUB Logo" />
          </a>
        </div>
        <p className={styles["small-gray-text"]}>Already a member?{' '}
          <a href="#"
            rel="noopener noreferrer">
            <span className={styles["small-blue-text"]}>Login</span>
          </a>
        </p>
      </div>
    </div>
  );
};
//space in jsx?
