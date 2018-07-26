import React from 'react';


// import Axios from 'axios';

// import { Carousel } from 'react-bootstrap';
import Auth from '../../lib/Auth';


class Muslim extends React.Component {


  render() {

    return (

      <div className="shariah">
        <h2>Shariah Marriage</h2>

        { !Auth.isAuthenticated() &&

          <h3>Please <a className="nav-link" href="/login">Login</a> to learn more.</h3> }


        { Auth.isAuthenticated() &&

            <div className="intro">

              <h3>Faith is important to both of us.  In both Christianity and Islam, Marriage, or Nikah as it is known in the Quran, is a solemn and sacred social contract between bride and groom. It is considered an act of worship and is a social as well as religious activity.</h3>

              <div className="nikah">
                <h4>Requirements of Nikah</h4>

                <h3>Mutual Agreement of Bride and Groom and Nikah Contract</h3>
                <p>Marriage is a contract, which both parties mutually agree and enter into. One matrimonial party expresses an ‘offer’ to enter into marriage and the other party expresses ‘acceptance’ of the responsibility in the assembly of marriage ceremony. The contract is written and signed by the bride and the groom and their two respective witnesses. This written marriage contract is then announced publicly.</p>

                <h3>Witnesses & Wali</h3>
                <p>The nikah must be witnessed by at least two adult witnesses, one of which may be the legal guardian of the bride (Wali). It is customary for this to be the father of the bride.</p>

                <h3>Mahr</h3>
                <p>The marriage-gift (Mahr) is a divine injunction. The giving of mahr to the bride by the groom is an essential part of the contract as stated in the  Quran (5:5).  It is a token commitment of the husband's responsibility and may be paid in cash, property or movable objects to the bride herself. The amount of mahr is not legally specified, however, moderation according to the existing social norm is recommended. The mahr may be paid immediately to the bride at the time of marriage, or deferred to a later date, or a combination of both.</p>

                <h3>Sermon</h3>
                <p>The assembly of nikah is addressed with a marriage sermon by the Muslim officiating the marriage. Prophet Muhammad (peace be upon him) made it his tradition (sunnah) to have a marriage sermon delivered in the assembly to solemnize the marriage. The sermon invites the bride and the groom, as well as the participating guests in the assembly to a life of piety, mutual love, kindness, and social responsibility.</p>

                <p>The Muslim officiating the marriage ceremony concludes the ceremony with prayer (Dua) for bride, groom, their respective families, the local community, and the community at large.</p>

                <h3>Feeding the guests (Walima)</h3>
                <p>This is a tradition of  the prophet  Muhammed (peace be upon him). It is an outward expression of gratitude and pleasure and a great means of publicising the marriage, which has been greatly encouraged. Islam advocates simplicity in ceremonies and celebrations.</p>

              </div>

              <h3>We do hope you will be able to witness our Nikah ceremony, followed by celebrating with us at our Walima.

              In the future, we also plan to have a Christian blessing in line with Charlotte's faith and of course get legally married too.

              We do hope, regardless of your personal beliefs, that you, our friends and family will want to support us throughout our wedding celebrations and marriage.</h3>


              <div className="click">
                <a href="/nikah/celebration"><button className="hibiscus">
                  To hear more about how we intend to celebrate, click here.
                </button></a>

                <a href="/nikah/rsvp"><button className="hibiscus">
                  If you would like to attend this event, please RSVP here. Please RSVP separately for each person attending.
                </button></a>

                <a href="mailto:javandchar@gmail.com"><button className="hibiscus">
                  If you have any questions, please do email us.
                </button></a>
              </div>

            </div>}


      </div>

    );
  }
}

export default Muslim;
