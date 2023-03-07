import Image from 'next/image';

import Head from "next/head";
import styles from "../styles/Home.module.css";

function MainPage() {
  return (
  <>
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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#schedule">Schedule</a>
        <a href="#faq">FAQ</a>
      </div>  
      <div>
        <section id="home" className={styles.sectionIntro}>
          <section>
            <Image src="/img/hang1.png" alt="hanging image 1" id={styles.hang1Img} />
            <Image src="/img/hang2.png" alt="hanging image 2" id={styles.hang2Img} />
            <Image src="/img/hang3.png" alt="hanging image 3" id={styles.hang3Img} />
            <Image src="/img/hang1.png" alt="hanging image 4" id={styles.hang4Img} />
          </section>
          <h1 className={styles.title}>CATALYST</h1>
          <h3 className={styles.description}>
            <b>hexlabs</b>
          </h3>
          <Image src="/img/moon.png" alt="moon" id={styles.moonImg} />
          <Image src="/img/fade.png" alt="fade" id={styles.fadeImg} />
        </section>
        <section id="about" className={styles.sectionAbout}>
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
          <Image src="/img/plane.png" alt="paper airplane" id={styles.paperPlane} />
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
            <p>Mentor registration is opening soon!</p>
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
            <Image src="/img/elephant_image.png" alt="elephant" id={styles.elephant} />
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
            <Image src="/img/sheep.png" alt="sheep" id={styles.sheep} />
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
            <Image src="/img/fox.png" alt="fox" id={styles.fox} />
          </div>
          {/*<Image src="/img/inverted_plane.png" alt="inverted_plane" id={styles.plane} />*/}
          {/* <Image src="/img/Luggage.png" alt="luggage" id={styles.luggageImg} />
          <Image src="/img/signs.png" alt="signs" id={styles.signsImg} />
          <Image src="/img/Clouds.png" alt="fluffy cloud" id={styles.cloud1Img} /> */}
        </section>
        <section id="tracks" className={styles.sectionTracks}>
          <div>
            
            <Image src="/img/inverted_plane.png" alt="inverted_plane" id={styles.invertedPlane} />
            <h3 className={styles.tracksTitle}>Tracks</h3>
              <h3>Web Development</h3>
              <p>
              Want to learn about the technologies core to the internet? Then Web Development is for you. 
              This track will teach you the fundamentals of HTML, CSS, and JavaScript so you can build your own website.
              Students will be given the opportunity to host their websites via GitHub Pages and learn about the basics of how 
              websites function and interact with the world.
              </p>
              <div className={styles.rightTracks}>
                <h3>Computer-Aided Design</h3>
                <p>Do you ever wonder how common household products are made?  Would you be interested in designing and making 
                those products yourself? If you like the idea of fabricating hardware products from scratch, then the Modeling track is for you!
                You will learn how to use CAD software to create 3D designs and make them with machines like 3D printers, lathes, etc.
                </p>
                </div>
              <h3>Data Science and Artificial Intelligence</h3>
              <p>Do you ever wonder how things like Netflix recommendations and Spotify playlists are made?  Are you a technical person and like 
                learning about what goes on in the background? If so, you should consider the ML track!
                In this track, you will learn how concepts like Data Science and AI come together to create Machine Learning based products!  
                Things like data integration, learning models, and information recognition will become much less foreign to you after going through this track.
              </p>
              <div className={styles.rightTracks}>
                <h3>Product Design & Entrepreneurship</h3>
                <p>Have you ever dreamt of starting your own business? Are you a creative thinker and a problem solver? Then the Product Development and Entrepreneurship track is for you!
                With this track you will be able to brainstorm products, work around the risks that go into creating a new product and simulate the process of product creation from ideation to execution. 
                You will see the versatility of computer science and how it intertwines with the business world.
                </p>
            </div>
            <h3 className={styles.sectionTitle}>Start your Story!</h3>
              <p className={styles.sectionPCenter}>
                Registration is FREE and is open NOW at catalyst.hexlabs.org and closes on April 2nd. 
                Cohort interest will be accepted until March 2nd.
              </p>
              <div className={styles.row}>
            </div>
            <div className={styles.row}></div>
            <a href="https://registration.hexlabs.org/63f7b3dca3d739b66acf39c8" rel="noopener" target="_blank">
            <div className={styles.rectangle}>
              <h3 className={styles.registerTitle}>Register Today!</h3>
            </div>
          </a>
          </div>
        </section>
        <section id="schedule" className={styles.sectionSchedule}>
          <Image src="/img/stars.png"/>
          <h3 className={styles.sectionTitle}>Schedule COMING SOON!</h3>
          <Image src="/img/roses.png"/>
        </section>
        <section id="faq" className={styles.sectionFAQ}>
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
            <br></br> Email us at:
            <u>
              <a href="mailto: hello@hexlabs.org">hello@hexlabs.org</a>
            </u>
              and {`we'll`} be happy to help!
          </p>
        </section>
        <footer className={styles.sectionFooter}>
          <Image src="/img/footer.png" alt="footer" id={styles.footerImg} />
          <p className={styles.sectionBottomText}>With ❤️ from the HexLabs team</p>
          <div className={styles.socials}>
            <span>
              <a href="https://www.facebook.com/TheHexLabs" target="_blank" rel="noreferrer">
                <Image src="/img/facebook.png" alt="facebook" />
              </a>
              <a href="https://twitter.com/thehexlabs" target="_blank" rel="noreferrer">
                <Image src="/img/twitter.png" className={styles.imageMargin} alt="twitter" />
              </a>
              <a
                href="https://www.instagram.com/thehexlabs/" target="_blank" rel="noreferrer">
                <Image src="/img/instagram.png" className={styles.imageMargin} alt="instagram" />
              </a>
              <a href="https://github.com/HackGT" target="_blank" rel="noreferrer">
                <Image src="/img/github.png" className={styles.imageMargin} alt="github" />
              </a>
              <a href="https://hexlabs.org/" target="_blank" rel="noreferrer">
                <Image src="/img/logo.png" className={styles.imageMargin} alt="hexlabs" />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}

export default MainPage;