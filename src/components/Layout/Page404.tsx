import image404 from "../../assets/images/404.png";
import "./Page404.css";

function Page404(): JSX.Element {
  return (
    <div className="container-404">
      <p>Sorry,</p>
      <p>The page you are looking for does not exist.</p>

      <img src={image404} alt="Page Not Found" className="image-404" />
    </div>
  );
}

export default Page404;
