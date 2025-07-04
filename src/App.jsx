import { css } from "@emotion/css";
import ImageModule from "./ImageModule";
import Contact from "./Contact";
import circleBlob from "./assets/circularBlobNoBG2.png";

const styles = {
  outerContainer: css`
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: snow;
    position: relative;
    @media screen and (min-width: 1000px) {
      padding-bottom: 2rem;
    }
  `,
  innerContainer: css`
    max-width: 800px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 1000px) {
      width: 80%;
    }
  `,
  infoContainer: css`
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 1000px) {
      width: 70%;
    }
  `,
  header: css`
    font-family: "Bebas Neue", sans-serif;
    padding: 1rem;
    font-size: 2.5rem;
    @media screen and (min-width: 540px) {
      white-space: nowrap;
      overflow-wrap: no-wrap;
      font-size: 4rem;
      padding: 2rem;
    }
  `,
  imageModuleContainer: css`
    width: 100%;
    @media screen and (min-width: 1000px) {
    }
  `,
  copyright: css`
    margin-top: 2rem;
    @media screen and (min-width: 1000px) {
      margin-top: 4rem;
    }
  `,
  circleBlob: css`
    display: none;
    @media screen and (min-width: 780px) {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0px;
      width: 30%;
    }
  `,
  rotatedBlob: css`
    display: none;
    transform: rotate(180deg);
    @media screen and (min-width: 780px) {
      display: block;
      position: absolute;
      top: 0;
      left: 0px;
      width: 25%;
    }
  `,
};

const App = () => {
  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.header}>Becca Lee Ceramics</h1>
      <div className={styles.innerContainer}>
        <div className={styles.imageModuleContainer}>
          <ImageModule />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <Contact />
      </div>
      <p className={styles.copyright}>© Becca Lee {new Date().getFullYear()}</p>
      <img src={circleBlob} className={styles.circleBlob} />
      <img src={circleBlob} className={styles.rotatedBlob} />
    </div>
  );
};

export default App;
