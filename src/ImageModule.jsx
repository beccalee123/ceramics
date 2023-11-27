import { useState } from "react";
import bwBlob from "./assets/bw_pitfire_blob.jpg";
import lavaBlob from "./assets/lava_pitfire_blob.jpg";
import mossyBlob from "./assets/mossy_blob.jpg";
import platinumBlob1 from "./assets/platinum_blob1.jpg";
import rainbowBlob from "./assets/rainbow_raku_blob.jpg";
import smokyBlob from "./assets/smoky_pitfire_blob.jpg";
import { ArrowLeft } from "./assets/ArrowLeft.jsx";
import { ArrowRight } from "./assets/arrowRight";
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
    font-size: 1.3rem;
    color: black;
    margin: 10px 0px;
  `,
};

const blobs = [
  {
    image: bwBlob,
    altText: "",
    caption: "Pit fired stoneware with terra sigillata - 2023",
  },
  {
    image: platinumBlob1,
    altText: "",
    caption: "Stoneware with platinum luster - 2023",
  },
  {
    image: mossyBlob,
    altText: "",
    caption: "Textured stoneware with Oribe glaze - 2023",
  },
  {
    image: lavaBlob,
    altText: "",
    caption: "Pit fired stoneware with terra sigillata - 2023",
  },
  {
    image: rainbowBlob,
    altText: "",
    caption: "Raku fired stoneware with Higby Blue glaze - 2023",
  },
  {
    image: smokyBlob,
    altText: "",
    caption: "Pit fired stoneware with terra sigillata - 2023",
  },
];

const ImageModule = () => {
  const [blobDisplayed, setBlobDisplayed] = useState(0);

  const onClickForward = () => setBlobDisplayed(blobDisplayed + 1);
  const onClickBackward = () => setBlobDisplayed(blobDisplayed - 1);

  return (
    <div className={styles.container}>
      {/* // TODO: add aria label */}
      <button
        className={styles.button}
        disabled={blobDisplayed === 0}
        onClick={onClickBackward}
      >
        <ArrowLeft />
      </button>
      {/* // TODO: Add alt text */}
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
          altText={blobs[blobDisplayed].altText}
        />
        <p className={styles.caption}>{`${blobs[blobDisplayed].caption}`}</p>
      </div>
      {/* // TODO: add aria label */}
      <button
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
