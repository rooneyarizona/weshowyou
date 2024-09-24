import styles from "../pages/About.module.css";
/**
 *
 * Standard about us page to provide web application context.
 */

function About() {
  return (
    <>
      <heading className={styles.aboutHeading}>5 Minutes - Max!</heading>
      <div className={styles.mainContainer}>
        We Show You was first created in 2023 as a provider of short
        demonstration videos. While many other online video streaming providers
        exist (with some fabulous content) it became apparent that scrolling
        through hour long tutorials is, well, boring!
      
      
        <p>And so We Show You was born! We (well, actually you) provide
        demonstration videos that are under 5 Minutes! We look foward to seeing
        what you've got!</p>
        </div>
    </>
  );
}

export default About;
