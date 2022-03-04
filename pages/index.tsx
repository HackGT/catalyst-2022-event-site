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
            students all throughout Georgia! We hope to see you on <b>Saturday, April 9th</b> at
            Georgia Tech! This will be an opportunity for participants to:
          </p>
          <ul>
            <li>Learn about the world of STEM and Computer Science as a career path</li>
            <li>Gain insight into impactful, widely-known technology companies</li>
            <li>Receive mentorship from college students and other industry professionals</li>
            <li>
              Connect with opportunities at Georgia Tech to further their education and exposure
            </li>
          </ul>
          <h3>Are You a Current Georgia Tech Student?</h3>
          <p>
            If so, {`you're`} still able to participate in the event! Each year, GT students
            volunteer as mentors to help facilitate the projects and activities included in each
            available track. This is an opportunity for you to directly interact with high school
            students across Georgia, provide helpful knowledge to aspiring minds, and share your
            passion for computer science and engineering. The core responsibilities of mentors
            include:
          </p>
          <ul>
            <li>Co-leading a student cohort</li>
            <li>Encouraging mentees to network within cohorts</li>
            <li>Inspiring mentees to learn both during and after the event</li>
            <li>Arriving on-time and staying throughout the duration of the event</li>
          </ul>
          <p>Mentor registration is opening soon! </p>
          <img src="/img/Ticket.png" alt="tickets" id={styles.ticketsImg} />
        </section>
        <section className={styles.sectionGoals}>
          <div className={styles.sectionDuring}>
            <h3>During the Day</h3>
            <p>
              Throughout the day, students will have the opportunity to follow one of four
              tracks:Web Development, Product Development & Entrepreneurship, Data Science & AI, or
              Cybersecurity. Each track consists of interactive workshops and curriculum that
              encourages students to think critically and creatively. Additionally, there will be
              opportunities for students to engage and connect with various industry professionals
              and college students. We want to show high school students the value of computer
              science, which is why we are providing all of the resources {`you'll`} need to get
              started!
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
          <p>You can apply for the cohort when completing registration!</p>
          <img src="/img/Luggage.png" alt="luggage" id={styles.luggageImg} />
          <img src="/img/signs.png" alt="signs" id={styles.signsImg} />
          <img src="/img/Clouds.png" alt="fluffy cloud" id={styles.cloud1Img} />
        </section>
        <section className={styles.sectionTracks}>
          <div>
            <h3 className={styles.sectionTitle}>Tracks</h3>
            <div className={styles.row}>
              <div className={styles.column}>
                <h3 className={styles.trackTitle}>Web Development</h3>
                <p className={styles.textBoundaries}>
                  Want to learn about the technologies core to the internet? Then Web Development is
                  for you. This track will teach you the fundamentals of HTML, CSS, and JavaScript
                  so you can build your own website.<br></br>
                  Students will be given the opportunity to host their websites via GitHub Pages and
                  learn about the basics of how websites function and interact with the world
                </p>
              </div>
              <div className={styles.column}>
                <h3 className={styles.trackTitle}>Cybersecurity</h3>
                <p className={styles.textBoundaries}>
                  Have you ever wondered how we protect our information on the Internet? If so, the
                  cybersecurity track is right for you! In the cybersecurity track, students will
                  have the ability to learn more about authentication, protocols, Linux, and more!
                  Additionally, students will get exposure to some of the basics behind ethical
                  hacking and even get the opportunity to dabble in cryptography. After this
                  experience, students will have exposure to the basic cybersecurity protocols used
                  in our everyday lives.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                <h3 className={styles.trackTitle}>Data Science & Artificial Intelligence</h3>
                <p className={styles.textBoundaries}>
                  Do you ever wonder how things like Netflix recommendations and Spotify playlists
                  are made? Are you a technical person and like learning about what goes on in the
                  background? If so, you should consider the ML track!<br></br>
                  In this track, you will learn how concepts like Data Science and AI come together
                  to create Machine Learning based products! Things like data integration, learning
                  models, and information recognition will become much less foreign to you after
                  going through this track.
                </p>
              </div>
              <div className={styles.column}>
                <h3 className={styles.trackTitle}>Product Design & Entrepreneurship</h3>
                <p className={styles.textBoundaries}>
                  Have you ever dreamt of starting your own business? Are you a creative thinker and
                  a problem solver? Then the Product Development and Entrepreneurship track is for
                  you!<br></br>
                  With this track you will be able to brainstorm products, work around the risks
                  that go into creating a new product and simulate the process of product creation
                  from ideation to execution. You will see the versatility of computer science and
                  how it intertwines with the business world.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rectangle}>
            <h3 className={styles.registerTitle}>Book Your Ticket</h3>
            <p className={styles.marginText}>
              Registration is FREE and is open <b>NOW</b> below
              <br></br>and closes on <b>April 2nd.</b>
              <br></br>
              Cohort interest will be accepted until March 9th.{" "}
            </p>
            <div className={styles.registerButton}>
              <a href="https://forms.gle/WLRq9B6AkmdU1fxaA" className={styles.button}>
                Participants
              </a>
              <a href="https://forms.gle/G8A94VQQP2MSoXJi9" className={styles.button}>
                Mentors
              </a>
            </div>
          </div>
          <img src="/img/Clouds 2.png" alt="clouds" id={styles.clouds2Img} />
        </section>
        <section className={styles.sectionSchedule}>
          <h3 className={styles.scheduleTitle}>Schedule - COMING SOON!</h3>
          <p className={styles.scheduleDesc}>
            *subject to change as details arrive and<br></br> will be updated accordingly
          </p>
          <img src="/img/passport.png" alt="passport" id={styles.passportImg} />
          <img src="/img/map.png" alt="map" id={styles.mapImg} />
        </section>
        <section className={styles.sectionFAQ}>
          <h3 className={styles.sectionTitle}>FAQ</h3>
          <div className={styles.question}>When is the Catalyst Learn-a-thon?</div>
          <div className={styles.answer}>April 9th, 2022!</div>
          <div className={styles.question}>Who can attend?</div>
          <div className={styles.answer}>
            High school students from all across Georgia are welcome to register.
          </div>
          <div className={styles.question}>Where is Catalyst?</div>
          <div className={styles.answer}>{`Catalyst will be held on Georgia Tech’s campus!`}</div>
          <div className={styles.question}>Do I need to bring anything to the learn-a-thon?</div>
          <div className={styles.answer}>
            Nope! We will provide food for every participant and laptops when necessary.
            Participants are welcome to bring their own devices.
          </div>
          <div className={styles.question}>Are parents allowed to come?</div>
          <div className={styles.answer}>
            Although we are grateful for parental support, Catalyst is a student-only event.
          </div>
          <div className={styles.question}>How do I choose which track to attend?</div>
          <div className={styles.answer}>
            During registration, students will be allowed to choose which of the four tracks{" "}
            {`they'd`}
            like to attend. For more information regarding each option, see either
            the Tracks section above or reference the registration application.
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
