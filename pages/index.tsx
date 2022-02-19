import Head from 'next/head';
import styles from '../styles/Home.module.css';

function MainPage() {
  return (
    <div>
      <Head>
        <title>Catalyst: A Learning Liftoff</title>
        <meta name="description" content="Catalyst is a free day of STE(A)M education directed towards underserved Georgia high school students formatted as a series of workshops." />
        <meta property="og:url" content="https://catalyst.hexlabs.org/" />
      </Head>
    <body>
        <section className={styles.sectionIntro}>
            <h1 className={styles.title}>CATALYST</h1>
            <h3 className={styles.description1}><b>Now boarding...</b></h3>
            <img src="/img/plane.png" alt = "plane going zoom" id={styles.planeImg}></img>
        </section>
        <div className={styles.gradientBackground}>
        <section className={styles.sectionAbout}>
            <div>
            <h3>About Your Trip</h3>
            <p>HexLabs presents Catalyst, a day of STEAM-related activities directed toward high school students all throughout Georgia!

                This will be an opportunity for participants to:</p>
            <ul>
                <li>Learn about the world of STEAM and Computer Science as a career path</li> 
                <li>Gain insight into impactful, widely-known technology companies</li>
                <li>Receive mentorship from college students and other industry professionals</li>
                <li>Connect with opportunities at Georgia Tech to further their education and exposure</li>
            </ul>
            <img src ="/img/Ticket.png" alt ="tickets" id={styles.ticketsImg} />
            </div>
            <div>            
            <h3>Are You a Current Georgia Tech Student?</h3>
            <p>If so, you're still able to participate in the event! Each year, GT students volunteer as mentors to help facilitate the projects and activities included in each available track. This is an opportunity for you to directly interact with high school students across Georgia, provide helpful knowledge to aspiring minds, and share your passion for computer science and engineering. 
                The core responsibilities of mentors include:</p>
            <ul><li>Co-leading a student cohort</li> 
                <li>Encouraging mentees to network within cohorts</li>
                <li>Inspiring mentees to learn both during and after the event</li>
                <li>Arriving on-time and staying throughout the duration of the event</li></ul> 
            <p>Mentor registration is opening soon!  </p> 
            </div>  
        </section>
        <section className={styles.sectionGoals}>
            <div>
            <h3>During the Day</h3>
            <p>Throughout the day, students will have the opportunity to follow one of four tracks:Web Development, Product Development & Entrepreneurship, Data Science & AI, or Computer Aided Design.

                Each track consists of interactive workshops and curriculum that encourages students to think critically and creatively. Additionally, there will be opportunities for students to engage and connect with various industry professionals and college students.
                
                We want to show high school students the value of computer science, which is why we are providing all of the resources you'll need to get started!</p>
            <img src="/img/Luggage.png" alt ="luggage" id={styles.luggageImg} />
            </div>
            <div>
            <h3>NEW: Catalyst Cohort</h3>
            <p>We are introducing a cohort program that extends the vision of our Catalyst learn-a-thon. A select group of students will have the opportunity to join the Catalyst Cohort. Those who join the cohort will have a two-month immersive introductory STEM experience in web development before our learn-a-thon event! In addition to the extended exploration into web development, students will have the opportunity to engage in extracurricular activities, like field trips, office visits, and campus tours, for insight into professional and academic possibilities.
                 Cohort members will also have access to and work with HexLabs mentors to complete a unique personal project!</p>
            <img src="/img/signs.png" alt="signs" id={styles.signsImg} />
            </div>
            <div>
            <h3>Our goals</h3>
            <p><ul><li>To foster connections between students with like-minded interest in computer science </li>
                <li>To create a community beyond students’ high schools for discussion, interaction, and innovation</li>
                <li>To encourage the long-term development of students’ ability to create impactful projects</li></ul></p>
            <p>You can apply for the cohort when completing registration!</p>
            </div>
        </section>
        </div>
        <footer>
            <p>Here is a sample footer</p>
        </footer>
    </body>
    </div>
  );
}

export default MainPage;
