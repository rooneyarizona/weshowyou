import { useEffect, useState } from "react";
import Loading from "./Loading";

/**
 * TODO: Make report a reusable component that can take report type props.
 */

function ReportService({ API }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:5000/api/${API}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Full response: ", data);
        setData(data.users || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(`{${API}} state updated:`, data);
  }, [data]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {data.map((data, index) => (
        <tr key={index}></tr>
      ))}
    </div>
  );
}

export default ReportService;
