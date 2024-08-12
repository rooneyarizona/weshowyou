/**
 * Loading component that can be reused for any page fetching data
 * @returns Loading text
 */

function Loading() {
  return (
    
      <div className={"spinner-container"}>
      <h1>Loading...</h1>
        <div className={"spinner"}></div>
      </div>
    

    
  );
}

export default Loading;
