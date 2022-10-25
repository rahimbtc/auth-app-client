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
      {/* header */}
      <div className={styles["register-header"]}>
        <div className={styles["register-header-logo"]}>
          <a href="#" rel="noopener noreferrer">
            <img src="/devchallenges.svg" alt="devchallenges Logo" />
          </a>
        </div>
        <div className={styles["register-header-profile"]}>
          <div><img src="/avatar-profile.png" alt="Avatar"></img></div>
          <div><span>Xanthe neal</span></div>
          <div><img src="/arrow.png" alt="arrow" className={styles["arrow"]}></img></div>
        </div>
      </div>
      
      {/* body */}
      <div className={styles["register-body"]}>
        <div className={styles["register-upper-link"]}>
          <a href="#"
            rel="noopener noreferrer">
            <span className={styles["small-blue-text"]}>&lt; Back</span>
          </a>
        </div>
        <div className={styles["register-form"]}>
          <h3>Change Info </h3>
          <p>Changes will be reflected to every services </p>
          <div className={styles["avatar"]}>
            <div><img src="/avatar-profile.png" alt="Avatar"></img></div>
            {/* <a href="#" download="new-filename"><i className="fas fa-download"></i></a> */}
            <div><span>CHANGE PHOTO</span></div>
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
        <div className={styles["register-lower-link"]}>
          <div><span>Created by rahimbtc</span></div>
          <div><span>devChallenges.io</span></div>
        </div>
      </div>

      {/* footer */}
      <div className={styles["register-footer"]}>
      </div>
    </div>
  );
};
//space in jsx?
