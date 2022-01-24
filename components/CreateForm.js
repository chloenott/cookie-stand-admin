import useResource from '../hooks/useResource'
import { useAuth } from '../contexts/auth'

export default function CreateForm({ hours }) {

  const { user } = useAuth()
  const { createResource } = useResource()

  function handleSubmit(event) {
    event.preventDefault();

    let hourlyData = [];
    maximum_customers_per_hour = parseInt(event.target.maximum_customers_per_hour.value);
    minimum_customers_per_hour = parseInt(event.target.minimum_customers_per_hour.value);
    avg_cookies_per_sale = parseFloat(
      event.target.avg_cookies_per_sale.value
    );
    for (let hour in hours) {
      let hourData = Math.round(
        (Math.random() * (maximum_customers_per_hour - minimum_customers_per_hour) +
        minimum_customers_per_hour) *
          avg_cookies_per_sale
      );
      hourlyData.push(hourData);
    }

    let report = {
      owner: user.id,
      maximum_customers_per_hour,
      minimum_customers_per_hour,
      avg_cookies_per_sale,
      location: event.target.location.value,
      hourly_sales: JSON.stringify(hourlyData),
    };
    createResource(report)
  }

  return (
    <form
      className="w-8/12 px-3 pb-2 mx-auto text-sm rounded-lg bg-emerald-300"
      onSubmit={handleSubmit}
    >
      <h2 className="p-3 text-xl text-center">Create Cookie Stand</h2>

      <div className="flex m-2">
        <label className="pr-2">Location</label>
        <input id="location" type="text" className="flex-grow" required></input>
      </div>

      <div className="flex mt-5">
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto text-center">
            Minimum Customers per Hour
          </label>
          <input id="minimum_customers_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block mx-auto text-center">
            Maximum Customers per Hour
          </label>
          <input id="maximum_customers_per_hour" type="text" className="w-full"></input>
        </div>
        <div className="w-1/4 p-2 mx-1 my-2 rounded bg-emerald-200">
          <label className="block text-center">Average Cookies per Sale</label>
          <input
            id="avg_cookies_per_sale"
            type="text"
            className="w-full"
          ></input>
        </div>
        <div className="flex items-center justify-center w-1/4 p-2 mx-1 my-2 rounded bg-emerald-500">
          <button className="w-1/4 mx-1 bg-emerald-500" type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
