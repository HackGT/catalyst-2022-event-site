import Head from "next/head";
import styles from "../styles/Home.module.css";

function MainPage() {
  return (
    <div>
      <Head>
        <title>HexLabs - Catalyst</title>
        <meta
          name="description"
          content="Catalyst is a free day of STEM education directed towards underserved Georgia high school students formatted as a series of workshops."
        />
        <meta property="og:url" content="https://catalyst.hexlabs.org/" />
      </Head>
      <div className={styles.topNav}>
        <a className={styles.active} href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>  
      <div>
        <section className={styles.sectionIntro}>
          <section>
            <img src="/img/hang1.png" alt="hanging image 1" id={styles.hang1Img} />
            <img src="/img/hang2.png" alt="hanging image 2" id={styles.hang2Img} />
            <img src="/img/hang3.png" alt="hanging image 3" id={styles.hang3Img} />
            <img src="/img/hang1.png" alt="hanging image 4" id={styles.hang4Img} />
          </section>
          <h1 className={styles.title}>CATALYST</h1>
          <h3 className={styles.description}>
            <b>hexlabs</b>
          </h3>
          <img src="/img/moon.png" alt="moon" id={styles.moonImg} />
          <img src="/img/fade.png" alt="fade" id={styles.fadeImg} />
        </section>
        <section className={styles.sectionAbout}>
          <h3>About</h3>
          <section className={styles.sectionAboutText}>
            <p>
              HexLabs presents Catalyst, a day of STEM-related activities directed toward high school
              students all throughout Georgia! 
            </p>
            <p>
              This will be an opportunity for participants to:
            </p>
            <ul>
              <li>Learn about the world of STEM and Computer Science as a career path</li>
              <li>Gain insight into impactful, widely-known technology companies</li>
              <li>Receive mentorship from college students and other industry professionals</li>
              <li>
                Connect with opportunities at Georgia Tech to further their education and exposure
              </li>
            </ul>
            </section>
          <img src="/img/plane.png" alt="paper airplane" id={styles.paperPlane} />
        </section>
        <section className={styles.sectionText}>
          <div className={styles.sectionCurrentStudent}>
            <h3>If You Are a Current</h3>
            <h3>Georgia Tech Student</h3>
            <p>You're still able to participate in the event! 
              Each year, GT students volunteer as mentors to help facilitate the projects and activities included in each available track. 
              This is an opportunity for you to directly interact with high school students across Georgia, provide 
              helpful knowledge to aspiring minds, and share your passion for computer science and engineering. 
            </p>
            <p>
              The core responsibilities of mentors include:
            </p>
            <ul>
              <li>Co-leading a student cohort</li>
              <li>Encouraging mentees to network within cohorts</li>
              <li>Inspiring mentees to learn both during <i>and</i> after the event</li>
              <li>Arriving on-time and staying throughout the duration of the event</li>
            </ul>
            <p>Menter registration is opening soon!</p>
          </div>
          <div className={styles.sectionDuringDay}>
            <h3>During the Day</h3>
            <p>
              Throughout the day, students will have the opportunity to follow one of four tracks:
              Web Development, Product Development & Entrepreneurship, Data Science & AI, or Computer Aided Design.<br></br>
              <br></br>
              Each track consists of interactive workshops and curriculum that encourages students to think critically and creatively.
              Additionally, there will be opportunities for students to engage and connect with various industry professionals and college students.<br></br>
              <br></br>
              We want to show high school students the value of computer science, which is why we are providing all of the resources you'll need to get started!
            </p>
            <img src="/img/elephant_image.png" alt="elephant" id={styles.elephant} />
          </div>
          <div className={styles.sectionCatalystCohort}>
            <h3>NEW: Catalyst Cohort</h3>
            <p>
              We are introducing a cohort program that extends the vision of our Catalyst learn-a-thon.
              A select group of students will have the opportunity to join the Catalyst Cohort.
              Those who join the cohort will have a two-month immersive introductory STEM experience in web development before our learn-a-thon event!
              In addition to the extended exploration into web development, students will have the opportunity to engage in extracurricular activities,
              like field trips, office visits, and campus tours, for insight into professional and academic possibilities.
              Cohort members will also have access to and work with HexLabs mentors to complete a unique personal project!
            </p>
            <img src="/img/sheep.png" alt="sheep" id={styles.sheep} />
          </div>
          <div className={styles.ourGoals}>
            <h3>Our goals</h3>
            <ul>
                <li>To foster connections between students with like-minded interest in computer science </li>
                <li>To create a community beyond students' high schools for discussion, interaction, and innovation</li>
                <li>To encourage the long-term development of students ability to create impactful projects</li>
              </ul>
            <p>
              You can apply for the cohort when completing registration!
            </p>
            <img src="/img/fox.png" alt="fox" id={styles.fox} />
          </div>
          <img src="/img/inverted_plane.png" alt="inverted_plane" id={styles.plane} />
          {/* <img src="/img/Luggage.png" alt="luggage" id={styles.luggageImg} />
          <img src="/img/signs.png" alt="signs" id={styles.signsImg} />
          <img src="/img/Clouds.png" alt="fluffy cloud" id={styles.cloud1Img} /> */}
          <a href="https://registration.hexlabs.org/63f7b3dca3d739b66acf39c8" rel="noopener" target="_blank">
            <div className={styles.rectangle}>
              <h3 className={styles.registerTitle}>Register Today!</h3>
              <p className={styles.marginText}>
                Catalyst is accepting applications! We hope to see you at{" "}
                <b>The Klaus Advanced Computing Building</b> on Georgia
                {` Tech's`} campus on <b>Date TBD</b> and{" "}
                <b>Date TBD</b>!
              </p>
            </div>
          </a>
        </section>
        <section className={styles.sectionTracks}>
          <div>
            {/* do not remove this, otherwise there will be random whitespace */}
            <h3 className={styles.sectionTitle}></h3>
            <div className={styles.row}></div>
            <div className={styles.row}></div>
          </div>
        </section>
        <section className={styles.sectionSchedule}>
          <img src="/img/stars.png"></img>
          <img src="/img/roses.png"></img>
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
          <div className={styles.answer}>{`Catalyst will be held on Georgia Tech's campus!`}</div>
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
              <a target="_blank" href="" rel="noreferrer">
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
          <p>With ❤️ from the HexLabs team</p>
          <div className={styles.socials}>
            <span>
              <a href="https://www.facebook.com/TheHexLabs" target="_blank" rel="noreferrer">
                <img src="/img/facebook.png" alt="facebook" />
              </a>
              <a href="https://twitter.com/thehexlabs" target="_blank" rel="noreferrer">
                <img src="/img/twitter.png" className={styles.imageMargin} alt="twitter" />
              </a>
              <a
                href="https://www.instagram.com/thehexlabs/" target="_blank" rel="noreferrer">
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
