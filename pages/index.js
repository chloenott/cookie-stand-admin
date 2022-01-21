import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="px-5 py-3 bg-emerald-500">
          <h1 className="text-3xl">
            Cookie Stand Admin
          </h1>
      </header>

      <Main></Main>

      <footer className="px-5 py-3 bg-emerald-500">
        <p className="text-sm">©2022</p>
      </footer>
    </div>
  )
}

function Main() {
  return (
    <main className="p-6 bg-emerald-50">
    <Form></Form>
    <ReportTable></ReportTable>

  </main>
  )
}

function Form() {
  return (
    <form className="w-8/12 p-3 mx-auto text-sm rounded-lg bg-emerald-300">
      <h2 className="text-xl text-center">Create Cookie Stand</h2>

      <div className="flex m-2">
        <label className="pr-2">Location</label>
        <input name="location" value="Barcelona" className="flex-grow bg-blue-100"></input>
      </div>

      <div className="flex mt-5">
        <div className="w-1/4 mx-3 my-2">
          <label className="block mx-auto text-center">Minimum Customers per Hour</label>
          <input name="min_cust_per_hour" value="2" className="w-full"></input>
        </div>
        <div className="w-1/4 mx-3 my-2">
          <label className="block mx-auto text-center">Maximum Customers per Hour</label>
          <input name="max_cust_per_hour" value="2" className="w-full"></input>
        </div>
        <div className="content-center w-1/4 mx-3 my-2">
          <label className="block text-center">Average Cookies per Sale</label>
          <input name="avg_cookies_per_sale" value="2" className="w-full"></input>
        </div>
        <button className="flex-grow w-1/4 mx-auto bg-emerald-500">Create</button>
      </div>
    </form>
  )
}

function ReportTable() {
  let data = `{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}`
  return (
    <div className="w-8/12 m-auto text-sm text-center text-gray-500">
      <p className="p-6">Report Table Coming Soon...</p>
      <p>{ data }</p>
    </div>
  )
}