import { React } from "react";
import "./main.css";
import SearchBar from "../Searchbar/SearchBar";
import fonts from "../Preview/fonts.json";

const Main = () => {
  return (
    <div className="main">
      <div className="heading">
        <h1>Creative-fonts</h1>
        <h2>"Beautifying Development"</h2>
      </div>
      <SearchBar data={fonts} />
    </div>
  );
};

export default Main;
