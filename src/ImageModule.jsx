import { useState } from "react";
import bwBlob from "./assets/bw_pitfire_blob.jpg";
import lavaBlob from "./assets/lava_pitfire_blob.jpg";
import mossyBlob from "./assets/mossy_blob.jpg";
import platinumBlob1 from "./assets/platinum_blob1.jpg";
import rainbowBlob from "./assets/rainbow_raku_blob.jpg";
import smokyBlob from "./assets/smoky_pitfire_blob.jpg";
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
    width: 70%;
  `,
  caption: css`
    font-family: "Old Standard TT", serif;
    color: black;
    font-size: 1rem;
    margin: 10px 0px;
    @media screen and (min-width: 780px) {
      font-size: 1.3rem;
    }
  `,
};

const blobs = [
  {
    image: bwBlob,
    altText:
      "A tall, curvaceous sculpture with an undulating shape. It has a shiny black & white smoky surface with a strong demarcation between the two colors",
    caption: "Pit fired stoneware with terra sigillata - 2023",
  },
  {
    image: platinumBlob1,
    altText:
      "An amorphous shape with circular divots. The surface is a shiny platinum color that shines brightly where it catches the light.",
    caption: "Stoneware with platinum luster - 2023",
  },
  {
    image: mossyBlob,
    altText:
      "A sculpture with an undulating shape comprised of bigger and smaller mounds. The surface is a pale blue-green with sections of smooth glaze ribboning through sections of divots that look like hammered-metal",
    caption: "Textured stoneware with Oribe glaze - 2023",
  },
  {
    image: lavaBlob,
    altText:
      "A tall amorphous shape that brings to mind an abstract hunched figure. It's a dark red with clouds and spots of grey, black, and cream stretching across the surface like a galaxy.",
    caption: "Pit fired stoneware with terra sigillata - 2023",
  },
  {
    image: rainbowBlob,
    altText:
      "A bulbous sculpture with multi-sized circular divots. It has a shiny, multicolored surface that moves between chartreuse greens, rusty reds, light blues, and yellows. ",
    caption: "Raku glazed & fired stoneware - 2023",
  },
  {
    image: smokyBlob,
    altText:
      "A curved sculpture with a surface color of warm and cool greys that form a smoky pattern that evokes galaxies. ",
    caption: "Pit fired stoneware with terra sigillata - 2023",
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
      <div
        className={css`
          display: flex;
          flex-direction: column;
          width: 70%;
        `}
      >
        <img
          src={blobs[blobDisplayed].image}
          className={styles.image}
          alttext={blobs[blobDisplayed].altText}
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
