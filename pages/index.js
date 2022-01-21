import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="px-5 py-3 bg-green-500">
          <h1 className="text-3xl">
            Cookie Stand Admin
          </h1>
      </header>

      <main>
        <form className="w-1/2 p-3 m-5 mx-auto text-sm bg-green-200 rounded-lg">
          <h2 className="text-xl text-center">Create Cookie Stand</h2>

          <div className="flex p-2">
            <label className="pr-2">Location</label>
            <input name="location" value="Barcelona" className="flex-grow bg-blue-100"></input>
          </div>

          <div className="flex w-1/3">
            <div className="content">
              <label className="p-2 mx-auto text-sm">Minimum Customers per Hour</label>
              <input name="min_cust_per_hour" value="2"></input>
            </div>
            <div>
              <label className="p-2 mx-auto">Minimum Customers per Hour</label>
              <input name="min_cust_per_hour" value="2"></input>
            </div>
            <div>
              <label className="p-2 mx-auto">Minimum Customers per Hour</label>
              <input name="min_cust_per_hour" value="2"></input>
            </div>
          </div>
        </form>
        <placeholder></placeholder>
      </main>

      <footer>

      </footer>
    </div>
  )
}

