import Image from "next/image";
import { styled } from "stitches.config";
import fightClub from "assets/images/fightClub.jpg";
import { EfdbBadge } from "components";

const MovieCard = () => {
  return (
    <StyledMovieCard>
      <EfdbBadge className="outsideBadge" variant={4} rating={5.1} />
      <div className="main-wrapper">
        <div className="poster">
          <Image alt="movie-poster" src={fightClub} width={304} height={424} />
        </div>
        <div className="description">
          {/* TODO: line clamp uygulandi. title mutlaka eklenmeli */}
          <span className="name">Kanun ve Düzen: Özel Mağdurlar Birimi</span>
          <span className="original-name">
            Law & Order: Special Victims Unit
          </span>
          <span className="year">1999</span>
        </div>
        <div className="full-details">
          <div className="overlay"></div>
          <div className="wrapper">
            <EfdbBadge variant={1} rating={5.1} />
            <span className="name">Kanun ve Düzen: Özel Mağdurlar Birimi</span>
            <span className="original-name">
              Law & Order: Special Victims Unit
            </span>
            <span className="etc-details">2021 · PG-18 · 1sa. 32dk.</span>
            <span className="synopsis">
              Yeni Dünya&apos;ya giden yıldızlararası bir gemideki genç bir
              tamirci, uzay gemisini bir silah olarak kullanarak kötü niyetli
              kozmik bir terörün üstesinden gelmek zorundadır. Yeni
              Dünya&apos;ya giden yıldızlararası biryıldızlararası
              biryıldızlararası biryıldızlararası
            </span>
            <span className="cast">
              <span className="title">Yönetmen: </span>
              <span className="names">Michael Chaves</span>
            </span>
            <span className="cast">
              <span className="title">Başroldekiler: </span>
              <span className="names">
                Patrick Wilson, Vera Farmiga, Ruairi O&apos;Connor
              </span>
            </span>
            <span className="tags">
              <span className="item">Bilim Kurgu</span>
              <span className="item">Aksiyon</span>
            </span>
          </div>
        </div>
      </div>
    </StyledMovieCard>
  );
};

const StyledMovieCard = styled("div", {
  width: 304,
  position: "relative",

  ".outsideBadge": {
    position: "absolute",
    overflow: "visible",
    top: "$3",
    right: "-$3",
    borderRadius: "$1 $1 0px $1",
    zIndex: 9,
    transition: "200ms opacity",

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

  ".main-wrapper": {
    position: "relative",
    overflow: "hidden",

    ".poster": {
      width: "100%",
      height: 424,
      position: "relative",
      borderRadius: "$3",

      img: {
        borderRadius: "$3",
      },
    },
    ".description": {
      display: "flex",
      flexDirection: "column",
      color: "$secondary",
      padding: "$3 $3 0 $3",
      lineHeight: "150%",

      ".name": {
        fontWeight: "$2",
        fontSize: "$4",
        color: "$heading",
        lineHeight: "140%",
        marginBottom: "$1",
        lineLimit: "2",
      },

      ".original-name": {
        fontWeight: "$2",
      },
    },
    ".full-details": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "100%",
      left: 0,
      borderRadius: "$3",
      overflow: "hidden",
      transition: "350ms top",

      ".overlay": {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(10px)",
        zIndex: 3,
      },

      ".wrapper": {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 4,
        padding: "$4 $3 0 $3",

        ".efdbBadge": {
          marginBottom: "$3",
        },

        ".name": {
          color: "$heading",
          fontSize: "$4",
          lineLimit: "2",
          fontWeight: "$2",
          lineHeight: "140%",
          marginBotton: "$1",
        },

        ".original-name": {
          color: "$secondary",
          fontWeight: "$2",
          lineHeight: "150%",
          lineLimit: "1",
          marginBotton: "$1",
        },

        ".etc-details": {
          color: "$bodyText",
          fontWeight: "$1",
          lineHeight: "150%",
        },

        ".synopsis": {
          display: "block",
          my: "$4",
          color: "$bodyText",
          lineHeight: "150%",
          lineLimit: "6",
        },

        ".cast": {
          fontSize: "$2",
          marginBottom: "$2",

          ".title": {
            fontWeight: "$1",
            color: "$secondary",
          },
          ".names": {
            fontWeight: "$2",
            color: "$bodyText",
          },
        },

        ".tags": {
          color: "$color2",
          textDecoration: "underline",
          margin: " auto 0 $4 0",

          ".item": {
            marginRight: "$2",
          },
        },
      },
    },
  },

  "&:hover": {
    ".outsideBadge": {
      opacity: 0,
    },
    ".main-wrapper": {
      ".full-details": {
        top: 0,
      },
    },
  },
});

export default MovieCard;
