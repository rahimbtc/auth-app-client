import { Formik, Field, Form, FormikHelpers } from 'formik';
import Image from 'next/image'
import styles from '../styles/login-form.module.css';

interface Values {
    username: string;
    password: string;
}

export default function LoginForm() {
    return (
      <div className={styles.rectangle184}>
        <a
          href="#"
          rel="noopener noreferrer"
        >
          <span className={styles.path44}>
            <Image src="/assets/devchallenges.png" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <h3 className={styles.text1 + ' p-3'}>Join thousands of learners from around the world </h3>
        <h5 className={styles.text2 + ' p-3'}>Master web development by making real-life projects. There are multiple paths for you to choose </h5>
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
            <div className={styles.rectangle181 + ' mb-3'}>
              <Field className={styles.email + "form-control"} id="email" name="email" placeholder="Email" aria-describedby="emailHelp" />
            </div>
  
            <div className={styles.rectangle182 + ' mb-3'}>
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>

            <button type="submit" className={styles.rectangle183}>Login</button>
          </Form>
        </Formik>
        <p className={styles.text3 + ' p-3'}>or continue with these social profile </p>

        <a
          href="#"
          rel="noopener noreferrer"
        >
          <span className={styles.ellipse2}>
            <Image src="/Github.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    );
  };