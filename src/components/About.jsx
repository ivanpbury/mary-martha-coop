import React from 'react';
import './About.css';

function Header() {

  return (
    <div>
        <section className='story'>
          <div className='content-wrap'>
            <h2>Our Story</h2>
            <p>When Saints Mary & Martha was first conceived, I was a regular, homeschooling mother of four who, over the
    course of the years, had gradually drawn closer and closer to the idea of a classical education. I was longing to
    include something in our school week that could be done in community and that embraced the richness and
    beauty of the classical model.</p>
            <br /><br />
            <p>In 2020, I was blessed to have six families join me and to have the support of <a id='holy-apostles-link' href='https://www.holyapostlesgo.org/'>Holy Apostles</a>!
    Since then, we have grown to fifteen families, but the goals are the same. We are all looking for rigor and
    challenge coupled with peace and reflection. We want our children to love learning and become real thinkers.
    We wish for a God-centered environment where our children can grow together and flourish in learning. We
    pursue this dream together and carry one another along on the journey.</p>
          </div>
        </section>

        <section className='mission'>
          <div className='content-wrap'>
            <h2>Our Mission</h2>
            <p>Saints Mary and Martha is a school where homeshoolers who love one another in Christ work together with the
    gifts and skills God has given us to educate our children according to the classical tradition – seeking the true,
    the good, and the beautiful – in a manner that is pleasing to God, enabling them to walk in the world but not be
    of the world.</p>
          </div>
        </section>

        <section className='contact'>
          <h2>Contact</h2>
          <div className='content-wrap contact-grid'>
            <div className='address'>
              <h3>Holy Apostles Church</h3>
              <p>19421 Ashworth Ave N</p>
              <p>Shoreline, WA 98133</p>
              <p>(206) 542-1391</p>
            </div>
            <div>
              <h3>Co-op Director</h3>
              <p>arcticsparkle@yahoo.com</p>
              <p>(425) 328-8867</p>
            </div>
          </div>
        </section>

    </div>
  );
}

export default Header;
