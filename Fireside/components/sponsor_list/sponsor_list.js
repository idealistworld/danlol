import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './sponsor_list.module.css';
import sponsor_list from './sponsor_list.png'
import Image from 'next/image'

function Sponsor_List(props) {
  return (
    <div>
      <Image
            id = {styles.sponsorList} 
            src = {sponsor_list}
            placeholder="blur" // Optional blur-up while loading
        />
    </div>
  );
}

export default Sponsor_List;
 