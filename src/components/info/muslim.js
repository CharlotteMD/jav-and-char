import React from 'react';


// import Axios from 'axios';

// import { Carousel } from 'react-bootstrap';
import Auth from '../../lib/Auth';


class Muslim extends React.Component {


  render() {

    return (

        <div className="shariah">
          <h4>Shariah Marriage</h4>

          { !Auth.isAuthenticated() &&

          <h3>Please <a className="nav-link" href="/login">Login</a> to learn more.</h3> }

          { Auth.isAuthenticated() &&

          <div className="intro">

            <p>As you will know, religion is so important to both of us.</p>

            <p>Javed is Muslim so we have decided to have a Shariah wedding first of all.  </p>

            <p>
Marriage (nikah) is a solemn and sacred social contract between bride and groom. This contract is a strong covenant as expressed in  the Quran (4:21).   It is considered an act of worship and is a social as well as religious activity. Islam advocates simplicity in ceremonies and celebrations.

Requirements of Nikah

Mutual Agreement of Bride and Groom
Both parties mutually agree and enter into this contract. One matrimonial party expresses  ‘offer’ to enter into marriage and the other party expresses ‘acceptance’ of the responsibility in the assembly of marriage ceremony. The contract is written and signed by the bride and the groom and their two respective witnesses. This written marriage contract is then announced publicly.

Witnesses & Wali
The nikah must be witnessed by at least two adult witnesses, one of which may be the legal  guardian of the bride (Wali). It is customary for this to be the father of the bride.

Mahr
The marriage-gift (Mahr) is a divine injunction. The giving of mahr to the bride by the groom is an essential part of the contract as stated in the  Quran (4:4).  It is a token commitment of the husband's responsibility and may be paid in cash, property or movable objects to the bride herself. The amount of mahr is not legally specified, however, moderation according to the existing social norm is recommended. The mahr may be paid immediately to the bride at the time of marriage, or deferred to a later date, or a combination of both.

Sermon
The assembly of nikah is addressed with a marriage sermon by the Muslim officiating the marriage.Prophet Muhammad (peace be upon him) made it his tradition (sunnah) to have a marriage sermon delivered in the assembly to solemnize the marriage. The sermon invites the bride and the groom, as well as the participating guests in the assembly to a life of piety, mutual love, kindness, and social responsibility.

The Muslim officiating the marriage ceremony concludes the ceremony with prayer (Dua) for bride, groom, their respective families, the local community, and the community at large.

Feeding  the guests (walima)This is a tradition of  the prophet  Muhammed (peace be upon him) It is an outward expression of gratitude and pleasure and a great means of publicising the marriage, which has been greatly encouraged.
</p>

            <p>When we decide to get legally married, we plan to have a Christian blessing in line with Charlotte's faith</p>

            <h5>We do hope, regardless of your personal beliefs, that you, our friends and family will want to support us throughout our wedding celebrations and marriage.</h5>

            <h5>To hear more about how we intend to celebrate, read on <a href="/nikah/celebration">here</a></h5>

            <h5>If you would like to attend this event, please <a href="/nikah/rsvp" >RSVP here.</a> Please RSVP separately for each person attending.</h5>

          </div>}


          </div>

    );
  }
}

export default Muslim;
