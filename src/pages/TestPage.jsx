import { useEffect, useState } from "react";
import ReportService from "../components/ReportService";

/**
 * 
 * Page used to test functions before implementing into application.
 * 
 */

function TestPage() {
  
  const API = "comments";

  return (
   <div>
    <ReportService API={API} />
    </div>
  )
}

export default TestPage;
