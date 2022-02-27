import { useState } from "react";
import Image from "next/image";
import { styled } from "stitches.config";
import darkKnight from "assets/images/darkKnight.jpg";
import shawshank from "assets/images/shawshank.jpg";
import fightClub from "assets/images/fightClub.jpg";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Button, EfdbBadge } from "components";

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <StyledHeroSlider>
      <div
        className="item"
        onMouseOver={() => handleActive(0)}
        active={active === 0 && "active"}
      >
        <Image src={darkKnight} alt="" />
        <div className="flare" />
        <div className="wrapper">
          <div className="detail">
            <EfdbBadge rating={5.4} variant={2} />
            <h3 className="name">Kara Şövalye</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="categories">
              <span className="category-item">Aksiyon</span>
              <span className="category-item">Macera</span>
            </div>
            <Button
              label="Detayli Bilgi"
              icon={<HiOutlineQuestionMarkCircle />}
              type="secondary"
            />
          </div>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => handleActive(1)}
        active={active === 1 && "active"}
      >
        <Image src={shawshank} alt="" />
        <div className="flare" />
        <div className="wrapper">
          <div className="detail">
            <EfdbBadge rating={5.4} variant={2} />
            <h3 className="name">Kara Şövalye</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="categories">
              <span className="category-item">Aksiyon</span>
              <span className="category-item">Macera</span>
            </div>
            <Button
              label="Detayli Bilgi"
              icon={<HiOutlineQuestionMarkCircle />}
              type="secondary"
            />
          </div>
        </div>
      </div>
      <div
        className="item"
        onMouseOver={() => handleActive(2)}
        active={active === 2 && "active"}
      >
        <Image src={fightClub} alt="" />
        <div className="flare" />
        <div className="wrapper">
          <div className="detail">
            <EfdbBadge rating={5.4} variant={2} />
            <h3 className="name">Kara Şövalye</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="categories">
              <span className="category-item">Aksiyon</span>
              <span className="category-item">Macera</span>
            </div>
            <Button
              label="Detayli Bilgi"
              icon={<HiOutlineQuestionMarkCircle />}
              type="secondary"
            />
          </div>
        </div>
      </div>
    </StyledHeroSlider>
  );
};

const StyledHeroSlider = styled("div", {
  width: 1312,
  height: 480,
  backgroundColor: "red",
  display: "flex",
  overflow: "hidden",

  ".item": {
    height: "100%",
    flex: "1",
    transition: "600ms flex",
    display: "flex",
    alignItems: "center",
    filter: "$",
    position: "relative",

    ".wrapper": {
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "$bgBlack70",
      transition: "800ms opacity",

      ".detail": {
        marginTop: "auto",
        marginBottom: "$4",
        mx: "$5",
        zIndex: 4,
        transform: "translateY(200%)",
        transition: "800ms transform",

        ".name": {
          my: "$2",
          color: "$heading",
          fontWeight: "$3",
          fontSize: "$5",
        },

        ".desc": {
          color: "$bodyText",
          textShadow: "$textShadow",
          marginBottom: "$2",
          lineHeight: "24px",
        },

        ".categories": {
          marginBottom: "$3",

          ".category-item": {
            color: "$color2",

            "&:not(:last-child)": {
              marginRight: "$2",
            },
          },
        },
      },
    },

    img: {
      with: "100%",
    },

    "&[active=active]": {
      flex: 1.815,

      ".wrapper": {
        background:
          "linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(0, 0, 0, 0.99) 75%)",

        ".detail": {
          transform: "translateY(0)",
        },
      },
      ".flare": {
        width: 150,
        height: 300,
        position: "absolute",
        background: "linear-gradient(180deg, #754096 0.01%, #5A46DD 100%)",
        filter: "blur(130px)",
        zIndex: 3,
      },
    },
  },
});

export default HeroSlider;
