import { css } from "@emotion/css";
import ImageModule from "./ImageModule";
import Contact from "./Contact";

const styles = {
  outerContainer: css`
    padding-top: 4rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
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
    font-family: "Bebas Neue", sans-serif;
    background-color: #dcdcdca8;
    padding: 2rem;
    width: 30rem;
    margin-top: -2.1rem;
    position: absolute;
    left: 0rem;
    font-size: 4rem;
  `,
  imageModuleContainer: css`
    padding-top: 70px;
  `,
  copyright: css`
    margin-top: 4rem;
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
      <div className={styles.innerContainer}>
        <Contact />
      </div>
      <p className={styles.copyright}>© Becca Lee {new Date().getFullYear()}</p>
    </div>
  );
};

export default App;
