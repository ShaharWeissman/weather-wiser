import "./Favorites.css";
import FavoriteCard from "./FavoriteCard";
import { useAppSelector } from "../../store/store";

function Favorites(): JSX.Element {
  const favorites = useAppSelector((state) => state.cities.favorites);
  return (
    <div className="favorite-container">
      {favorites.map((item, index) => (
        <FavoriteCard key={index} city={item} />
      ))}
    </div>
  );
}

export default Favorites;
