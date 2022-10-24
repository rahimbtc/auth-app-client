import type { NextPage } from 'next'
import Head from 'next/head'
import RegisterForm from '../components/register-form'

const Register: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Register Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="vh-100 d-flex justify-content-center align-items-center">
        <RegisterForm/>
      </main>
    </div>
  )
}

export default Register