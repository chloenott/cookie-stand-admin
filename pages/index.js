import Head from 'next/head'
import Image from 'next/image'
import { render } from 'react-dom'
import { useState } from 'react'
import { hours } from '../data'

export default function CookieStandAdmin() {

  let seattle = {
    name: 'Seattle',
    hourlyData: ['5', '10', '6', '3']
  }

  let wenatchee = {
    name: 'Wenatchee',
    hourlyData: ['3', '3', '1', '9']
  }

  const [reports, setReports] = useState([seattle, wenatchee])

  function handleAddReport(report) {
    setReports([...reports, report])
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="p-6 bg-emerald-50">
        <CreateForm handleAddReport={handleAddReport} hours={hours} />
        <ReportTable hours={hours} reports={reports} />
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

function CreateForm({handleAddReport, hours}) {

  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

  function handleSubmit(event) {
    event.preventDefault()

    let hourlyData = []
    for (let hour in hours) {
      max_cust_per_hour = parseFloat(event.target.max_cust_per_hour.value)
      min_cust_per_hour = parseFloat(event.target.min_cust_per_hour.value)
      avg_cookies_per_sale = parseFloat(event.target.avg_cookies_per_sale.value)

      let hourData = Math.round((Math.random() * (max_cust_per_hour - min_cust_per_hour) + min_cust_per_hour) * avg_cookies_per_sale)
      hourlyData.push(hourData)
    }

    let report = {
      name: event.target.location.value,
      hourlyData: hourlyData
    }
    handleAddReport(report)
  }

  return (
    <form className="w-8/12 px-3 pb-2 mx-auto text-sm rounded-lg bg-emerald-300" onSubmit={handleSubmit} >
      <h2 className="p-3 text-xl text-center">Create Cookie Stand</h2>

      <div className="flex m-2">
        <label className="pr-2">Location</label>
        <input id="location" type="text" className="flex-grow" required></input>
      </div>

      <div className="flex mt-5">
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto text-center">Minimum Customers per Hour</label>
          <input id="min_cust_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto text-center">Maximum Customers per Hour</label>
          <input id="max_cust_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block text-center">Average Cookies per Sale</label>
          <input id="avg_cookies_per_sale" type="text" className="w-full"></input>
        </div>
        <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 rounded bg-emerald-500">
          <button className="w-1/4 mx-1 bg-emerald-500" type="submit">Create</button>
        </div>
      </div>
    </form>
  )
}

function ReportTable({hours, reports}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          {hours.map(hour => <th key={hour}>{hour}</th>)}
        </tr>
      </thead>
      <tbody>
        {reports.map(report => <ResultsRow key={report.name} report={report}/>)}
      </tbody>
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