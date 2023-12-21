import "./Favorites.css";
import { FavoritesMockData } from '../../services/ApiService';
import FavoriteCard from './FavoriteCard';


function Favorites(): JSX.Element {
    return (
      <div className="favorite-container">
        {FavoritesMockData.map((item, index) => (
          <FavoriteCard 
            key={index} 
            city={item.city}
            temperature={item.temperature}
            description={item.description}
          />
        ))}
      </div>
    );
  }


export default Favorites;