import bg from "../assets/bg.png";
import logo from "../assets/logo.png";
import { animeData } from "../services/api";
import  AnimeCard  from "../components/AnimeCard";
import { Link } from 'react-router-dom';
// import axios from "axios";
import { useEffect, useState } from "react";
const styles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  position: "relative",
  display: "flex",
};
function AnimeAll() {
  const [anime, setanime] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await animeData(search);
        console.log(data);
        setanime(data);
        console.log(anime);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };
    fetchData();
  }, [search]);
  return (
    <div style={styles}>
      <div className="absolute top-0 w-full flex  items-center px-4 py-2">
        <img className="w-[6%] h-[6%]" src={logo} alt="Logo" />
        <input
          onChange={(e)=>setSearch(e.target.value)}
          type="search"
          placeholder="Search your anime"
          className="px-4 py-2 ml-[30%] w-[15%] bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
        />
        <div>
        <button className="ml-4">
            <Link to="/" className="text-black">
              Home
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-[12%] ml-6 flex flex-wrap justify-center ">
        <AnimeCard anime={anime}/>
      </div>
    </div>
  );
}

export default AnimeAll;
