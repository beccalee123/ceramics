import { css } from "@emotion/css";

const styles = {
  heading: css`
    font-family: "Bebas Neue", sans-serif;
    background-color: #dcdcdca8;
    padding: 2rem;
    width: 100%;
    font-size: 2.5rem;
    @media screen and (min-width: 780px) {
      width: 15rem;
      margin-top: -6.5rem;
      position: absolute;
      right: -7rem;
      font-size: 4rem;
    }
  `,
  textBlock: css`
    font-family: "Old Standard TT", serif;
    font-size: 1.3rem;
    display: block;
    padding: 20px;
    @media screen and (min-width: 780px) {
      padding: 60px 40px;
    }
  `,
  textContainer: css`
    background-color: #f6f4ef;
    width: 100%;
    position: relative;
    margin-top: 10px;
    @media screen and (min-width: 780px) {
      width: 70%;
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
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.textBlock}>
        Hi! I'm Becca - a part-time ceramicist and full-time software engineer.
        I love working with clay to create sculptural organic shapes that break
        from the rigidity of my day-to-day life. I often build without a formal
        plan, letting the clay and my instincts naturally guide me toward the
        final shape. I also enjoy playing with texture, whether it be burnishing
        to a radiant shine, mimicking the topography of hammered metal, or
        getting a little weird with gloop and spikes.
        <br />
        <br />
        If you'd like to chat about collaboration or commisions, please reach
        out via{" "}
        <a className={styles.link} href="mailto:rebecca.kirstin.lee@gmail.com">
          email
        </a>
        . I'd love to chat with you!
      </p>
    </div>
  );
};

export default Contact;
