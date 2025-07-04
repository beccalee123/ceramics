import { useState } from "react";
import circularBlob from "./assets/circularBlob2.jpg";
import archBlob from "./assets/archBlob.jpg";
import carvedBlob from "./assets/carvedBlob.jpg";
import lamp from "./assets/lamp.jpg";
import heartVase from "./assets/heartVase2.jpg";
import grapeSodaBlob from "./assets/grapeSodaRakuBlob.jpg";
import mermaidBlob from "./assets/mermaidBlob.jpg";
import twoArmedBlob from "./assets/twoArmedSeaBlob.jpg";
import raspberry from "./assets/raspberryInception.jpg";
import motherBlob from "./assets/blobWithBB.jpg";
import { ArrowLeft } from "./assets/ArrowLeft.jsx";
import { ArrowRight } from "./assets/ArrowRight";
import { css } from "@emotion/css";

const styles = {
  button: css`
    border: none;
    background-color: transparent;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:disabled {
      fill: gainsboro;
    }
  `,
  container: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  imageContainer: css`
    display: flex;
    flex-direction: column;
    object-fit: cover;
    width: 80%;
    @media screen and (min-width: 780px) {
      width: 60%;
      height: 625px;
    }
  `,
  image: css`
    border: 7px solid black;
    @media screen and (min-width: 400px) {
      border: 20px solid black;
    }
  `,
  caption: css`
    font-family: "Old Standard TT", serif;
    color: black;
    font-size: 1rem;
    margin: 10px 0px;
    height: 2rem;
    @media screen and (min-width: 1000px) {
      font-size: 1.3rem;
    }
  `,
};

const blobs = [
  {
    image: circularBlob,
    altText:
      "An abstract shape - circular at the bottom with four curving blobby arms that meet at the top. The shape is made of a rough, tan clay with spots and there are brush strokes in three different blues across the surface.",
    caption: "Stoneware with underglaze - 2025",
  },
  {
    image: archBlob,
    altText:
      "An undulating dark grey arch with black spots across the whole surface. The spots increase in size on the concave planes and decrease inside on the convex planes to exaggerate the undulating shape.",
    caption: "Stoneware with underglaze - 2025",
  },
  {
    image: lamp,
    altText:
      "A two-legged blobby shape with one side standing tall and the other curving in to meet it. At the top there's a cup-like shape that's topped with a white globe lightbulb. The surface is white with toasty brown areas and the whole thing is covered with small black dots.",
    caption: "Stoneware with underglaze - 2025",
  },
  {
    image: carvedBlob,
    altText:
      "A form that bubbles in and out. It's covered in oblong carvings of various sizes that flow with the shape. The carvings are filled with blues and greens and the uncarved space is a light cool gray with speckles.",
    caption: "Textured stoneware with underglaze and celadon glaze - 2024",
  },
  {
    image: heartVase,
    altText:
      "A vase shaped like an abstract human heart. Lines are carved into the surface to create a wavy checkerboard pattern that follows the convex and concave planes of the shape. The checkers are filled with metallic blue, silver, rusty red, pearly white, and celadon glazes. The lines are filled in with black.",
    caption: "Raku glazed & fired stoneware - 2024",
  },
  {
    image: twoArmedBlob,
    altText:
      "A undulating bulbous base that splits into two arms that evoke snakes or claws. The surface is both textured and smooth with a tan base and a teal tint over the top.",
    caption: "Stoneware with experimental glaze, underglaze, and wax - 2025",
  },
  {
    image: grapeSodaBlob,
    altText:
      "A curved sculpture that appears somewhat human or alien in nature - it has a wide curvy base that tapers into a thin neck and topped with a large head. The suface is a dark metallic purple with white spots and patches of blue metallic glaze peppering the surface.",
    caption: "Pit fired with terra sigillata, then Raku glazed & fired - 2025",
  },
  {
    image: mermaidBlob,
    altText:
      "A curved white sculpture that's wide at the base and narrow at the top. The surface is a combination of smooth areas and texture similar to hammered metal. Golden flowers, pearls, lines, and abstract shapes sit on the surface of the sculpture decorating it from top to bottom.",
    caption: "Stoneware with highline white glaze and gold luster - 2024",
  },
  {
    image: raspberry,
    altText:
      "A giant ceramic reaspberry photographed next to 4 real raspberries for scale. The ceramic raspberry is roughly 8 times larger than the real raspberries.",
    caption: "Earthenware with underglaze and clear glaze - 2024",
  },
  {
    image: motherBlob,
    altText:
      "An abstract shape that evokes a mother holding a baby in her arms. The surface is coverd in dark brown, white, grey, and purple markings that are reminiscent of galaxies. The surface of the sculpture shines where it's hit with light.",
    caption: "Pit-fired stoneware with terra sigilata and wax - 2024",
  },
];

const ImageModule = () => {
  const [blobDisplayed, setBlobDisplayed] = useState(0);

  const onClickForward = () => setBlobDisplayed(blobDisplayed + 1);
  const onClickBackward = () => setBlobDisplayed(blobDisplayed - 1);

  return (
    <div className={styles.container}>
      <button
        aria-label="Previous image"
        className={styles.button}
        disabled={blobDisplayed === 0}
        onClick={onClickBackward}
      >
        <ArrowLeft />
      </button>
      <div className={styles.imageContainer}>
        <img
          src={blobs[blobDisplayed].image}
          className={styles.image}
          alt={blobs[blobDisplayed].altText}
        />
        <p className={styles.caption}>{`${blobs[blobDisplayed].caption}`}</p>
      </div>
      <button
        aria-label="Next image"
        className={styles.button}
        disabled={blobDisplayed === blobs.length - 1}
        onClick={onClickForward}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default ImageModule;
