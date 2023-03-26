import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './join_community.module.css';
import Community_Section_Blurb from './community_section_blurb/community_section_blurb'
import Image from 'next/image'
import Fireside from './fireside.png'

function Join_Community(props) {
  return (
    <div id={styles.joinCommunityContainer}>
      <div id = {styles.communityFlexContainer}>
        <h1 id={styles.communityTitle}>Join the Community</h1>
        <div id={styles.commmunityStatsContainer}>
          <p className={styles.communityStats}>Enrolled Students: <span className={styles.communityStatsMetric}>100+</span></p>
          <p className={styles.communityStats}>Universities Globally: <span className={styles.communityStatsMetric}>30+</span></p>
        </div>
        <div id={styles.communityBlurbContainer}>
          <Image
            className={styles.communitySectionBlurbContainer}
            src={Fireside}
            id={styles.firesideCommunityPhoto}
            placeholder="blur" // Optional blur-up while loading
          />
          <Community_Section_Blurb button_title="Apply Now" title="Fireside Fellows" paragraph="This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that."></Community_Section_Blurb>
          <Community_Section_Blurb button_title="Join the Slack" title="Our Socials" paragraph="This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that."></Community_Section_Blurb>
          <Community_Section_Blurb button_title="Contact Us" title="Let's Collaborate" paragraph="This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that."></Community_Section_Blurb>
        </div>
      </div>
    </div>
  );
}

export default Join_Community;