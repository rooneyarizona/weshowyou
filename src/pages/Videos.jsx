import VideoList from "../components/VideoList";
import SearchResults from "../components/SearchResults";

function Videos({ searchItem, setSearchItem }) {
  return (
    <div className="main-container">
      <h1>Videos 📽️</h1>
      <VideoList />      
    </div>
  );
}

export default Videos;

