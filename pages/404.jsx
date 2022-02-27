import { ErrorPage } from "components";
import deadLaptop from "assets/images/deadLaptop.svg";

const NotFound = () => (
  <ErrorPage
    image={deadLaptop}
    code="404"
    title="Sayfa Bulunamadı"
    description="Gitmeye çalıştığınız sayfa bulunamadı, adres çubuğunu kontrol edin veya anasayfaya dönün."
  />
);

export default NotFound;
