/* eslint no-img-element: 0 */

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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#schedule">Schedule</a>
        <a href="#faq">FAQ</a>
      </div>  
      <div>
        <section id="home" className={styles.sectionIntro}>
          <section>
            <img src="/img/hang1.png" alt="hanging image 1" id={styles.hang1Img} />
            <img src="/img/hang2.png" alt="hanging image 2" id={styles.hang2Img} />
            <img src="/img/hang3.png" alt="hanging image 3" id={styles.hang3Img} />
            <img src="/img/hang1.png" alt="hanging image 4" id={styles.hang4Img} />
          </section>
        </section>
        <div className = {styles.sectionTitles}>
            <section>
              <h1 id={styles.mainTitle}>CATALYST</h1>
              <h3 id={styles.orgTitle}>hexlabs</h3>
          </section>
        </div>
        <img src="/img/moon.png" alt="moon" id={styles.moonImg} />
        <img src="/img/fade.png" alt="fade" id={styles.fadeImg} />
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
        </section>
        <section>
          <div>
            <h3>If You Are a Current Georgia Tech Student</h3>
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
          <h3>During the Day</h3>
          <div className={styles.sectionDuringDay}>
            <p>
              Throughout the day, students will have the opportunity to follow one of six tracks:
              AI/ML, Web Scraping, Intro to Chemical Engineering, 
              Cracking the Code: Cryptography and Number Theory, or UI/UX Design.
              <br></br><br></br>
              Each track consists of interactive workshops and curriculum that encourages students to think critically and creatively.
              Additionally, there will be opportunities for students to engage and connect with various industry professionals and college students.<br></br>
              <br></br>
              We want to show high school students the value of computer science, which is why we are providing all of the resources you'll need to get started!
            </p>
            <img src="/img/elephant_image.png" alt="elephant" id={styles.elephant} />
          </div>
          <h3>NEW: Catalyst Cohort</h3>
          <div className={styles.sectionCatalystCohort}>
            <img src="/img/sheep.png" alt="sheep" id={styles.sheep} />
            <p>
              We are introducing a cohort program that extends the vision 
              <br/>
              of our Catalyst learn-a-thon.
              A select group of students will have the opportunity to join the Catalyst Cohort.
              <br />
              <br />
              Those who join the cohort will have a two-month immersive 
              <br />
              introductory STEM experience in web development before our learn-a-thon event!
              <br />
              <br />
              In addition to the extended exploration into web development, students will have the opportunity to engage in extracurricular activities,
              like field trips, office visits, and campus tours, for insight into professional and academic possibilities.
              Cohort members will also have access to and work with HexLabs mentors to complete a unique personal project!
              <br/><br/>
              <p>You can apply for the cohort when completing registration!</p>
            </p>
          </div>
          <h3>Our goals</h3>
          <div className={styles.ourGoals}>
            <ul>
              <li>To foster connections between students with like-minded interest in computer science </li>
              <li>To create a community beyond students' high schools for discussion, interaction, and innovation</li>
              <li>To encourage the long-term development of students ability to create impactful projects</li>
              <li>To allow prospective college students to see the innovative facilities and programs that Georgia Institute of Technology has to offer</li>
            </ul>
            <img src="/img/fox.png" alt="fox" id={styles.fox} />
          </div>
          {/*<img src="/img/inverted_plane.png" alt="inverted_plane" id={styles.plane} />*/}
          {/* <img src="/img/Luggage.png" alt="luggage" id={styles.luggageImg} />
          <img src="/img/signs.png" alt="signs" id={styles.signsImg} />
          <img src="/img/Clouds.png" alt="fluffy cloud" id={styles.cloud1Img} /> */}
        </section>
        <section id="tracks" className={styles.sectionTracks}>
          <div>
            <h3 className={styles.tracksTitle}>Tracks</h3>
              <div className={styles.track}>
                <h2>AI/ML</h2>
                <p>
                Do you ever wonder how things like Netflix recommendations and Spotify playlists are made?  Are you a technical person and like 
                learning about what goes on in the background? If so, you should consider the ML track!
                In this track, you will learn how concepts like Data Science and AI come together to create Machine Learning based products!  
                Things like data integration, learning models, and information recognition will become much less foreign to you after going through this track.
                </p>
              </div>
              <div className={styles.track}>
                <h2>Web Scraping</h2>
                <p>
                In this track, we'll teach you how to take in data from the web to use for analysis or code through Python. We will mainly be webscraping 
                websites- looking at the websites that you use everyday and give you a look behind the curtain into their web code and their data. At the 
                end of the day, every student will have the chance to choose their own topic and web data to investigate as a personal project. Make sure 
                to join this track if you want to expand your coding knowledge and are interested in the behind the scenes of the internet!
                </p>
              </div>
              <div className={styles.track}></div>
                <h2>Intro to Chemical Engineering</h2>
                <p>
                  This track aims to give students a brief overview about organic chemistry, chemical synthesis, and chemical engineering. We will introduce 
                  the basic concepts of organic chemistry, polymer science, and chemical engineering. In the end, students are able to work in groups to make 
                  chemical bonds, molecules, and polymer structures using the molecule kit provided by us. This workshop is for students who are interested in 
                  chemistry, chemical engineering, and biotechnology.
                </p>
              </div>
              <div className={styles.track}>
                <h2>UI/UX Design</h2>
                <p>
                  If you're interested in technology and design, 
                  then UI/UX is the perfect combination! 
                  UI/UX is all about creating easy to use and visually appealing designs for websites and apps. 
                  It's a skill that is in high demand, as companies are focused 
                  on creating products that offer a great user experience. 
                  This track will teach you basic UI/UX principles, 
                  industry tools like Figma, and other skills that will help you 
                  succeed in a career in technology design.
                </p>
              </div>
              <div className={styles.track}>
                <h2>Understanding the Virtual World: Algorithms and Data Structures</h2>
                <p>
                  Want to know more about how apps like Spotify and TikTok work? 
                  Join us for “Understanding the Virtual World” track to get an in 
                  depth understanding of the data structures and algorithms that 
                  are used in building your favorite social media platforms! 
                  Students will also have the opportunity to utilize the 
                  information they learn to design their very own project!
                </p>
              </div>
              <div>
                <h3 className={styles.sectionTitle}>Start your Story!</h3>
                <div className={styles.row}>
              </div>
            <div className={styles.row}></div>
            <div className={styles.register}>
              <a className={styles.registerButton} href="https://registration.hexlabs.org/63f7b3dca3d739b66acf39c8" rel="noopener" target="_blank">
                <h4 className={styles.registerTitle}>Register Today!</h4>
              </a>
            </div>
          </div>
        </section>
        <section id="schedule" className={styles.sectionSchedule}>
          <img src="/img/stars.png" id={styles.rosesandstars}></img>
          <h3 className={styles.sectionTitle}>Schedule</h3>
          <div className="container">
            <div className="wrapper">
              <ul className="sessions">
                <li>
                  <div className="time">08:30 AM - 09:30 AM Drop off/Check in</div>
                  <p>Come to the check-in table at Klaus to get registered for the event!</p>
                </li>
                <li>
                  <div className="time">09:30 AM - 10:00 AM Opening Ceremony</div>
                  <p>Join us for our 2023 opening ceremonies!</p>
                </li>
                <li>
                  <div className="time">10:00 AM - 11:30 AM First Learning Block</div>
                  <p>Have fun learning in your first block of the day!</p>
                </li>
                <li>
                  <div className="time">11:45 AM - 12:30 PM Guest Speaker</div>
                  <p>Join us for our guest speaker!</p>
                </li>
                <li>
                  <div className="time">12:30 PM - 02:00 PM Lunch</div>
                  <p>Join us in the Klaus Atrium for some sandwiches from Lee's Bakery and some fun board games!</p>
                </li>
                <li>
                  <div className="time">02:00 PM - 03:30 PM Second Learning Block</div>
                  <p>Have fun learning in your second block of the day!‍</p>
                </li>
                <li>
                  <div className="time">03:45 PM - 04:15 PM Speaker Panel</div>
                  <p>Join us to hear from Georgia Tech students at our speaker panel!</p>
                </li>
                <li>
                  <div className="time">04:30 PM - 05:30 PM Closing Ceremony</div>
                  <p>Join us for closing ceremonies and expo to see what your peers created today!</p>
                </li>
                <li>
                  <div className="time">05:30 PM Pick Up</div>
                  <p>We hope you had fun at Catalyst and hope to see you next year!</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="/img/roses.png" id={styles.rosesandstars}></img>
        </section>
        <section id="faq" className={styles.sectionFAQ}>
          <h3 className={styles.sectionTitle}>FAQ</h3>
          <div className={styles.question}>Who can apply?</div>
          <div className={styles.answer}>
            High school students from all across Georgia are welcome to register.
          </div>
          <div className={styles.question}>Where is Catalyst?</div>
          <div className={styles.answer}>{`Catalyst will be held on Georgia Tech's campus!`}</div>
          <div className={styles.question}>Do I need to bring anything to the learn-a-thon?</div>
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
            check out our organization website <u><a target="_blank" href="https://hexlabs.org/" rel="noreferrer">here</a></u>.
          </div>
          <p className={styles.contactText}>
            Other Questions? <br></br>
            <br></br> Email us at: <u><a href="mailto: catalyst@hexlabs.org">catalyst@hexlabs.org</a></u> and {`we'll`} be happy to help!
          </p>
        </section>
        <footer className={styles.sectionFooter}>
          <img src="/img/footer_stars.png" alt="footer" id={styles.footerImg} />
          <p className={styles.sectionBottomText}>With ❤️ from the HexLabs team</p>
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