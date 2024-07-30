//Component for main page section to show search results and videolist

import VideoList from "./VideoList";
import SearchResults from "./SearchResults";
import Header from "./Header";


export default function Main({ searchItem, setSearchItem }) {
  return (
    <div className="main-container">
      <span>
        <Header />
        <VideoList />
        <SearchResults searchItem={searchItem} setSearchItem={setSearchItem} />
      </span>
    </div>
  );
}
