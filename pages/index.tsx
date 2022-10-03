import Head from "next/head";
import styles from "../styles/Home.module.css";

function MainPage() {
  return (
    <div>
      <Head>
        <title>Catalyst: A Learning Liftoff</title>
        <meta
          name="description"
          content="Catalyst is a free day of STEM education directed towards underserved Georgia high school students formatted as a series of workshops."
        />
        <meta property="og:url" content="https://catalyst.hexlabs.org/" />
      </Head>
      <div>
        <section className={styles.sectionIntro}>
          <h1 className={styles.title}>CATALYST</h1>
          <h3 className={styles.description}>
            <b>Now boarding...</b>
          </h3>
          <img src="/img/plane_crop.png" alt="plane going zoom" id={styles.planeImg} />
        </section>
        <section className={styles.sectionAbout}>
          <h3>About Your Trip</h3>
          <p>
            HexLabs presents Catalyst, a day of STEM-related activities directed toward high school
            students all throughout Georgia! We hope to see you on <b>Saturday, November 5th</b> and{" "}
            <b>Saturday, November 12th</b> at Georgia Tech! This will be an opportunity for
            participants to:
          </p>
          <ul>
            <li>Learn about the world of STEM and Computer Science as a career path</li>
            <li>Gain insight into impactful, widely-known technology companies</li>
            <li>Receive mentorship from college students and other industry professionals</li>
            <li>
              Connect with opportunities at Georgia Tech to further their education and exposure
            </li>
          </ul>
          <img src="/img/Ticket.png" alt="tickets" id={styles.ticketsImg} />
        </section>
        <section className={styles.sectionGoals}>
          <div className={styles.sectionDuring}>
            <h3>During the Day</h3>
            <p>
              Throughout the day, there will opportunities for students to engage and connect with
              various industry professionals and college students. We want to show high school
              students the value of computer science, which is why we are providing all of the
              resources {`you'll`} need to get started!
            </p>
          </div>
          <h3>NEW: Catalyst Cohort</h3>
          <p>
            We are introducing a cohort program that extends the vision of our Catalyst
            learn-a-thon. A select group of students will have the opportunity to join the Catalyst
            Cohort. Those who join the cohort will have a two-month immersive introductory STEM
            experience in web development before our learn-a-thon event! In addition to the extended
            exploration into web development, students will have the opportunity to engage in
            extracurricular activities, like field trips, office visits, and campus tours, for
            insight into professional and academic possibilities. Cohort members will also have
            access to and work with HexLabs mentors to complete a unique personal project!
          </p>
          <h3>Our goals</h3>
          <ul>
            <li>
              To foster connections between students with like-minded interest in computer science{" "}
            </li>
            <li>
              To create a community beyond students’ high schools for discussion, interaction, and
              innovation
            </li>
            <li>
              To encourage the long-term development of students’ ability to create impactful
              projects
            </li>
          </ul>
          <p>You can apply for the cohort below!</p>
          <img src="/img/Luggage.png" alt="luggage" id={styles.luggageImg} />
          <img src="/img/signs.png" alt="signs" id={styles.signsImg} />
          <img src="/img/Clouds.png" alt="fluffy cloud" id={styles.cloud1Img} />
        </section>
        <section className={styles.sectionTracks}>
          <div>
            {/* do not remove this, otherwise there will be random whitespace */}
            <h3 className={styles.sectionTitle}></h3>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
          </div>
          <a href="https://forms.gle/g5jSKBEQKunmvug16" rel="noreferrer noopener" target="_blank">
            <div className={styles.rectangle}>
              <h3 className={styles.registerTitle}>Book Your Ticket</h3>
              <p className={styles.marginText}>Catalyst is accepting applications!</p>
            </div>
          </a>
          <img src="/img/Clouds 2.png" alt="clouds" id={styles.clouds2Img} />
        </section>
        <section className={styles.sectionFAQ}>
          <h3 className={styles.sectionTitle}>FAQ</h3>
          <div className={styles.question}>When will the cohort meet?</div>
          <div className={styles.answer}>Saturday, November 5th and Saturday, November 12th.</div>
          <div className={styles.question}>Who can apply?</div>
          <div className={styles.answer}>
            High school students from all across Georgia are welcome to register.
          </div>
          <div className={styles.question}>Where is Catalyst?</div>
          <div className={styles.answer}>{`Catalyst will be held on Georgia Tech’s campus!`}</div>
          <div className={styles.question}>Do I need to bring anything to cohort meeting?</div>
          <div className={styles.answer}>
            Nope! We will provide food for every participant and laptops when necessary.
            Participants are welcome to bring their own devices.
          </div>
          <div className={styles.question}>Are parents allowed to come?</div>
          <div className={styles.answer}>
            Although we are grateful for parental support, Catalyst cohort meetings are student-only
            events.
          </div>
          <div className={styles.question}>What is HexLabs?</div>
          <div className={styles.answer}>
            HexLabs is a student organization and 501(c)(3) non-profit at Georgia Tech devoted to
            Computer Science outreach in collegiate and high school communities. To learn more,
            check out our organization website 
            <u>
              <a target="_blank" href="https://hexlabs.org/" rel="noreferrer">
                here
              </a>
            </u>
            .
          </div>
          <p className={styles.contactText}>
            Other Questions? <br></br>
            <br></br> Email us at 
            <u>
              <a href="mailto: hello@hexlabs.org">hello@hexlabs.org</a>
            </u>
             and {`we'll`} be happy to help!
          </p>
        </section>
        <footer className={styles.sectionFooter}>
          <img src="/img/footer.png" alt="footer" id={styles.footerImg} />
          <div className={styles.socials}>
            <span>
              <a href="https://www.facebook.com/TheHexLabs" target="_blank" rel="noreferrer">
                <img src="/img/facebook.png" alt="facebook" />
              </a>
              <a href="https://twitter.com/thehexlabs" target="_blank" rel="noreferrer">
                <img src="/img/twitter.png" className={styles.imageMargin} alt="twitter" />
              </a>
              <a
                href="https://www.instagram.com/thehexlabs/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/instagram.png" className={styles.imageMargin} alt="instagram" />
              </a>
              <a href="https://github.com/HackGT" target="_blank" rel="noreferrer">
                <img src="/img/github.png" className={styles.imageMargin} alt="github" />
              </a>
              <a href="https://hexlabs.org/" target="_blank" rel="noreferrer">
                <img src="/img/logo.png" className={styles.imageMargin} alt="hexlabs" />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MainPage;
