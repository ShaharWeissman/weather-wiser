import "./Favorites.css";
import FavoriteCard from "./FavoriteCard";

function Favorites(): JSX.Element {
  const favorites: { city: string; temprature: string; description: string }[] =
    [];
  return (
    <div className="favorite-container">
      {favorites.map((item, index) => (
        <FavoriteCard
          key={index}
          city={item.city}
          temperature={item.temprature}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Favorites;
