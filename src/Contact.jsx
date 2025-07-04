import { css, cx } from "@emotion/css";

const styles = {
  heading: css`
    font-family: "Bebas Neue", sans-serif;
    font-size: 2.5rem;
    @media screen and (min-width: 780px) {
      font-size: 4rem;
    }
  `,
  secondHeading: css`
    margin-top: 4rem;
  `,
  textBlock: css`
    font-family: "Old Standard TT", serif;
    font-size: 1.3rem;
    display: block;
    padding: 20px;
    @media screen and (min-width: 780px) {
      padding: 32px 40px;
    }
  `,
  textContainer: css`
    margin-top: 10px;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 780px) {
      margin-top: 10rem;
    }
  `,
  link: css`
    color: black;
  `,
};

const Contact = () => {
  return (
    <div className={styles.textContainer}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.textBlock}>
        {`Hi! I'm Becca - a Seattle-based ceramic artist and blob sculpture
        enthusiast. I love working with clay to create sculptural organic shapes
        that break from the rigidity of my day-to-day life. I often build
        without a formal plan, letting the clay and my instincts naturally guide
        me toward a piece's final shape. I also enjoy playing with pattern and
        texture and have been known to spend hours on end hand painting dots,
        filling in carvings with glaze or luster, or burnishing to a high shine
        (typically questioning my sanity when I reach about the 3 hour mark but
        deciding it was all extremely worth it by the end).`}
        <br />
        <br />
        {`While I've been creative my whole life, I had a long absence from the
        arts in my adult life. It's been a joy to return to my roots with
        ceramics and I'm so grateful to have this creative outlet that helps me
        find joy even during the hardest of times.`}
      </p>

      <h2 className={cx(styles.heading, styles.secondHeading)}>Contact</h2>
      <div className={styles.textBlock}>
        <p>
          {`If you'd like to chat about collaborations, commisions, or other
          opportunities please reach out!`}
        </p>
        <br />
        Email:{" "}
        <a
          className={styles.link}
          href="mailto:becca@beccaleeceramics.com"
          target="_blank"
          rel="noreferrer"
        >
          becca@beccaleeceramics.com
        </a>
        <br />
        Instagram:{" "}
        <a
          className={styles.link}
          href="https://www.instagram.com/beccaleeceramics/"
          target="_blank"
          rel="noreferrer"
        >
          @beccaleeceramics
        </a>
      </div>
    </div>
  );
};

export default Contact;
