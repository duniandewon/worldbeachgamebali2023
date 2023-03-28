import { Search as SearchIcon } from "../../assets/icons";

const SearchBox = () => {
  return (
    <div className="searchbox">
      <span className="searchbox__icon">
        <SearchIcon />
      </span>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBox;
