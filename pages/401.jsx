import { ErrorPage } from "components";
import deadLaptop from "assets/images/deadLaptop.svg";

const Unauthorize = () => (
  <ErrorPage
    image={deadLaptop}
    code="401"
    title="Yetkiniz Yok!"
    description="Bu işlemi yapmaya yetkiniz yok."
  />
);

export default Unauthorize;
