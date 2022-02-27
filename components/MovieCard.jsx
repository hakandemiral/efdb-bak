import Image from "next/image";
import { styled } from "stitches.config";
import fightClub from "assets/images/fightClub.jpg";
import { EfdbBadge } from "components";

const MovieCard = () => {
  return (
    <StyledMovieCard>
      <div className="poster">
        <Image src={fightClub} width={304} height={424} />
        <EfdbBadge variant={4} rating={5.1} />
      </div>
      <div className="description">
        <span className="name">Kanun ve Düzen: Özel Mağdurlar Birimi</span>
        <span className="original-name">Law & Order: Special Victims Unit</span>
        <span className="year">1999</span>
      </div>
    </StyledMovieCard>
  );
};

const StyledMovieCard = styled("span", {
  ".poster": {
    width: 304,
    height: 424,
    position: "relative",

    img: {
      borderRadius: "$3",
    },

    div: {
      position: "absolute",
      overflow: "visible",
      top: "$3",
      right: "-$3",
      borderRadius: "$1 $1 0px $1",

      "&::after": {
        content: "",
        position: "absolute",
        backgroundColor: "#5A3E07",
        width: 16,
        height: 20,
        right: 0,
        bottom: -20,
        clipPath: "polygon(0 0, 0 61%, 100% 0)",
      },
    },
  },
});

export default MovieCard;
