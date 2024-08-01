import { useEffect, useState } from "react";
import ReportService from "../components/ReportService";

function TestPage() {
  
  const API = "comments";

  return (
   <div>
    <ReportService API={API} />
    </div>
  )
}

export default TestPage;
