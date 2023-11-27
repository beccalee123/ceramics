import bwBlob from "./assets/bw_pitfire_blob.jpg";
import { css } from "@emotion/css";
import ImageModule from "./ImageModule";

const styles = {
  outerContainer: css`
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: snow;
  `,
  innerContainer: css`
    width: 80%;
    max-width: 800px;
    position: relative;
    display: flex;
    justify-content: center;
  `,
  header: css`
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    background-color: #dcdcdca8;
    padding: 2rem;
    width: 26rem;
    margin-top: -1.5rem;
    position: absolute;
    left: 0rem;
    font-size: 2.5rem;
  `,
  imageModuleContainer: css`
    padding-top: 70px;
  `,
};

// TODO: add mobile styling

const App = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.header}>Becca Lee Ceramics</h1>
        <div className={styles.imageModuleContainer}>
          <ImageModule />
        </div>
      </div>
    </div>
  );
};

export default App;
