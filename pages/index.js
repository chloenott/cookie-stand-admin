import Head from 'next/head'
import Image from 'next/image'
import { render } from 'react-dom'

export default function CookieStandAdmin() {

  // Hours, seattle, wenatchee, and reports are temporary sample data to demonstrate functionality of passing data to child components.
  let hours = ['6am','7am','8am','9am']

  let seattle = {
    name: 'Seattle',
    hourlyData: ['5', '10', '6', '3']
  }

  let wenatchee = {
    name: 'Wenatchee',
    hourlyData: ['3', '3', '1', '9']
  }

  let reports = [seattle, wenatchee]

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="p-6 bg-emerald-50">
        <CreateForm />
        <ReportTable hours={hours} reports={reports}/>
      </main>

      <Footer />
    </div>
  )
}

function Header({title}) {
  return (
    <header className="px-5 py-3 bg-emerald-500">
      <h1 className="text-3xl">
        {title}
      </h1>
    </header>
  )
}

function Footer() {
  return (
    <footer className="px-5 py-3 bg-emerald-500">
      <p className="text-sm">©2022</p>
    </footer>
  )
}

function CreateForm() {
  return (
    <form className="w-8/12 px-3 pb-2 mx-auto text-sm rounded-lg bg-emerald-300">
      <h2 className="p-3 text-xl text-center">Create Cookie Stand</h2>

      <div className="flex m-2">
        <label className="pr-2">Location</label>
        <input name="location" value="" className="flex-grow"></input>
      </div>

      <div className="flex mt-5">
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto text-center">Minimum Customers per Hour</label>
          <input name="min_cust_per_hour" value="2" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto text-center">Maximum Customers per Hour</label>
          <input name="max_cust_per_hour" value="2" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block text-center">Average Cookies per Sale</label>
          <input name="avg_cookies_per_sale" value="2" className="w-full"></input>
        </div>
        <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 rounded bg-emerald-500">
          <button className="w-1/4 mx-1 bg-emerald-500">Create</button>
        </div>
      </div>
    </form>
  )
}

function ReportTable({hours, reports}) {
  return (
    <table>
      <th>
        <td>Location</td>
        {hours.map(hour => <td key={hour}>{hour}</td>)}
      </th>
      {reports.map(report => <ResultsRow key={report.name} report={report}/>)}
    </table>
  )
}

function ResultsRow({report}) {
  return (
    <tr>
      <td>{report.name}</td>
      {report.hourlyData.map((hourData, index) => <td key={index}>{hourData}</td>)}
    </tr>
  )
}