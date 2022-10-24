/* eslint-disable @next/next/no-img-element */
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Image from 'next/image'
import styles from '../styles/register.module.scss';

interface Values {
  username: string;
  password: string;
}

export default function RegisterForm() {
  return (
    <div className={styles["register-container"]}>
      <div className={styles["register-header"]}>
        <a
          href="#"
          rel="noopener noreferrer"
          className={styles["header-logo"]}
        >
          <img src="/devchallenges.svg" alt="devchallenges Logo" />
        </a>
      </div>
      <div className={styles["register-link"]}>
        <a href="#"
          rel="noopener noreferrer">
          <span className={styles["small-blue-text"]}>&lt; back</span>
        </a>
      </div>
      <div className={styles["register-body"]}>
        <h3>Change Info </h3>
        <p>Changes will be reflected to every services </p>
        <div className={styles["avatar"]}>
          <img src="/avatar.png" alt="Avatar"></img>
          <a href="#" download="new-filename"><i className="fas fa-download"></i></a>
        </div>
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
              <br></br>
              <label htmlFor="name">Name</label>
              <Field className={styles.input} id="name" name="name" placeholder="Enter your name ..." aria-describedby="nameHelp" />
              <br></br>
              <label htmlFor="name">Bio</label>
              <textarea className={styles.bio} id="bio" name="Bio" placeholder="Bio" ></textarea>
              <br></br>
              <label htmlFor="name">Phone</label>
              <Field className={styles.input} id="phone" name="phone" placeholder="phone number" aria-describedby="phoneHelp" />
              <br></br>
              <label htmlFor="name">Email</label>
              <Field className={styles.input} id="email" name="email" placeholder="Email" aria-describedby="emailHelp" />
              <br></br>
              <label htmlFor="name">Password</label>
              <Field className={styles.input} id="password" name="password" placeholder="Password" type="password" />
            </div>
            <button type="submit" className={styles["login-button"]}>save</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
//space in jsx?
