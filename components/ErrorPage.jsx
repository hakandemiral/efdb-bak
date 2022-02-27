import Image from "next/image";
import Router from "next/router";
import { Button } from "components";
import { styled } from "stitches.config";

const ErrorPage = ({ image, code, title, description }) => (
  <StyledErrorPage>
    <div className="wrapper">
      {image && <Image src={image} alt="error page image" />}
      <h1>
        <span>{code}</span> {title}
      </h1>
      <p>{description}</p>
      <Button onClick={() => Router.push("/")} label="Geri Dön" size="long" />
    </div>
  </StyledErrorPage>
);

const StyledErrorPage = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".wrapper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "auto",

    img: {
      width: "auto",
    },
    h1: {
      fontFamily: "$heading",
      fontSize: "$5",
      fontWeight: "$3",
      color: "$heading",
      marginTop: "$4",
      marginBottom: "$2",

      span: {
        color: "$color1",
      },
    },
    " p": {
      color: "$bodyText",
      width: "80%",
      textAlign: "center",
      fontWeight: "$1",
    },
    button: {
      marginTop: "$4",
    },
  },
});

export default ErrorPage;
