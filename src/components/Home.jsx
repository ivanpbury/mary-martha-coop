import React from 'react';

function Home() {

  return (
    <div>
        <section className='titleArea'>
          <h1>Saints Mary & Martha Classical Co-op</h1>
        </section>

        <section className='intro'>
          <p>Saints Mary and Martha is a school where homeshoolers who love one another in Christ work together with the gifts and skills God has given us to educate our children according to the classical tradition – seeking the true, the good, and the beautiful – in a manner that is pleasing to God, enabling them to walk in the world but not be of the world.</p>
          <h3>Our meetings are held at Holy Apostles Greek Orthodox Church thanks to their generosity</h3>
          <p><a href='https://www.holyapostlesgo.org/'>Church Website</a></p>
          <p><a href='https://www.orthodoxintro.org/'>Introductory Info on the Orthodox Church</a></p>
        </section>

        <section className='loginToView'>
          <h2>Please sign in to view member resources</h2>
        </section>

        <section className='memberResources'>
          <h2>Member Resources</h2>
          <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/marymarthacalendar2023.pdf?alt=media&token=7609edbc-2fd6-4a5b-b3ed-6cbfb16648fe">2022-2023 Calendar</a></p>
          <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/Co-op%20Family%20Directory%202022-2023.pdf?alt=media&token=9c1b7ae0-7a88-4b65-958c-75f17d1a2e71">Family Directory</a></p>
          <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/familygroupings2023.pdf?alt=media&token=a7f86533-2d43-4882-87d7-01fcf0fc17bb">Class Groupings</a></p>

        </section>

        <section className='generalResources'>
          <h2>Additional Resources</h2>
          <p><a href="https://firebasestorage.googleapis.com/v0/b/marymarthaschool.appspot.com/o/Apolytikion%20for%20Sts.%20Mary%20%26%20Martha.pdf?alt=media&token=066b0dd3-ec51-44c2-bf15-4612f1cd63b6">Apolytikion for Saints Mary and Martha</a></p>
          <p><a href="https://www.pccs.org/wp-content/uploads/2016/06/Introduction-Classical-Education-Christopher-Perrin.pdf">A brief overview of classical education by Dr. Christopher Perrin</a></p>
          <p>Our writing curriculum: <a href="https://iew.com/">Theme-Based Writing</a></p>
          <p>We also use Writing and Rhetoric from <a href="https://classicalacademicpress.com/">Classical Academic Press</a></p>
          <p><a href="https://www.saintemmelia.com/">Orthodox Homeschool Support</a></p>
          <p><a href="https://classicalu.com/">Parent education</a></p>
        </section>
    </div>

  );
}

export default Home;
