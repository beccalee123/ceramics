import { css } from "@emotion/css";
import ImageModule from "./ImageModule";
import Contact from "./Contact";

const styles = {
  outerContainer: css`
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: snow;
    @media screen and (min-width: 780px) {
      padding-top: 4rem;
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
    @media screen and (min-width: 780px) {
      flex-direction: row;
      width: 80%;
    }
  `,
  header: css`
    font-family: "Bebas Neue", sans-serif;
    background-color: #dcdcdca8;
    width: 100%;
    padding: 2rem;
    font-size: 2.5rem;

    @media screen and (min-width: 780px) {
      width: -moz-max-content;
      width: -webkit-max-content;
      width: intrinsic;
      white-space: nowrap;
      overflow-wrap: no-wrap;
      margin-top: -2.1rem;
      position: absolute;
      left: 0rem;
      font-size: 4rem;
    }
  `,
  imageModuleContainer: css`
    padding-top: 2rem;
    @media screen and (min-width: 780px) {
      padding-top: 5rem;
    }
  `,
  copyright: css`
    margin-top: 2rem;
    @media screen and (min-width: 780px) {
      margin-top: 4rem;
    }
  `,
};

const App = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h1 className={styles.header}>Becca Lee Ceramics</h1>
        <div className={styles.imageModuleContainer}>
          <ImageModule />
        </div>
      </div>
      <div className={styles.innerContainer}>
        <Contact />
      </div>
      <p className={styles.copyright}>© Becca Lee {new Date().getFullYear()}</p>
    </div>
  );
};

export default App;
