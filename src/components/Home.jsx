import React from 'react';
import { auth } from '../firebase';
import './Home.css';

function Home() {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
  });

      return unsubscribe;
  }, [user]);

  return (
    <div className='home'>
        <section className='title-area'>
          <h1>Saints Mary & Martha Classical Co-op</h1>
        </section>

        <section className='intro'>
          <div className='content-wrap'>
            <p className='welcome-text'>Saints Mary and Martha is a school where homeshoolers who love one another in Christ work together with the gifts and skills God has given us to educate our children according to the classical tradition – seeking the true, the good, and the beautiful – in a manner that is pleasing to God, enabling them to walk in the world but not be of the world.</p>
            <h3>Our meetings are held at <a href='https://www.holyapostlesgo.org/'>Holy Apostles Greek Orthodox Church</a></h3>
          </div>
        </section>

        {user ? (
          <section className='member-resources'>
            <div className='content-wrap'>
              <h2>Member Resources</h2>
              <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/marymarthacalendar2023.pdf?alt=media&token=7609edbc-2fd6-4a5b-b3ed-6cbfb16648fe">2022-2023 Calendar</a></p>
              <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/Co-op%20Family%20Directory%202022-2023.pdf?alt=media&token=9c1b7ae0-7a88-4b65-958c-75f17d1a2e71">Family Directory</a></p>
              <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/familygroupings2023.pdf?alt=media&token=a7f86533-2d43-4882-87d7-01fcf0fc17bb">Class Groupings</a></p>
            </div>
          </section>
        ) : (
          <section className='member-resources'>
            <div className='content-wrap'>
              <h2>Please sign in to view member resources</h2>
            </div>
          </section>
        )}

        <section className='general-resources'>
          <h2>Additional Resources</h2>
          <div className='content-wrap grid'>
            <p><a href="https://classicalacademicpress.com/">Writing and Rhetoric from Classical Academic Press</a></p>
            <p><a href="https://iew.com/">Our writing curriculum: Theme-Based Writing</a></p>
            <p><a href="https://www.pccs.org/wp-content/uploads/2016/06/Introduction-Classical-Education-Christopher-Perrin.pdf">A Brief Overview of Classical Education</a></p>
            <p><a href="https://www.saintemmelia.com/">Orthodox Homeschool Support</a></p>
            <p><a href="https://classicalu.com/">Parent education</a></p>
            <p><a href='https://www.orthodoxintro.org/'>Introductory Info on the Orthodox Church</a></p>
          </div>
        </section>
    </div>

  );
}

export default Home;
