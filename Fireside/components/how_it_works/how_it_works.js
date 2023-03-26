import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Image from 'next/image'
import styles from './how_it_works.module.css';
import How_It_Works_Card from './how_it_works_card/how_it_works_card';

function How_It_Works(props) {

  const [card_title, set_card_title] = useState("This is First");
  const [card_paragraph, set_card_paragraph] = useState("First.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.");

  function scrollView() {
    //NEEDS FIXING
    const mainRoot = document.getElementById(styles.howItWorksTitle);
    mainRoot.scrollIntoView({ behavior: "smooth" });
  }

  const card1 = () => {
    set_card_title("This is First")
    set_card_paragraph("First.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector("#how_it_works_selector1").style.color = "black"
    document.querySelector("#how_it_works_selector2").style.color = "#838383"
    document.querySelector("#how_it_works_selector3").style.color = "#838383"
    document.querySelector("#how_it_works_selector4").style.color = "#838383"
  }

  const card2 = () => {
    set_card_title("This is Second")
    set_card_paragraph("Second.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector("#how_it_works_selector1").style.color = "#838383"
    document.querySelector("#how_it_works_selector2").style.color = "black"
    document.querySelector("#how_it_works_selector3").style.color = "#838383"
    document.querySelector("#how_it_works_selector4").style.color = "#838383"
  }

  const card3 = () => {
    set_card_title("This is Third")
    set_card_paragraph("Third.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector("#how_it_works_selector1").style.color = "#838383"
    document.querySelector("#how_it_works_selector2").style.color = "#838383"
    document.querySelector("#how_it_works_selector3").style.color = "black"
    document.querySelector("#how_it_works_selector4").style.color = "#838383"
  }

  const card4 = () => {
    set_card_title("This is Fourth")
    set_card_paragraph("Fourth.  This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.")
    scrollView() 
    document.querySelector("#how_it_works_selector1").style.color = "#838383"
    document.querySelector("#how_it_works_selector2").style.color = "#838383"
    document.querySelector("#how_it_works_selector3").style.color = "#838383"
    document.querySelector("#how_it_works_selector4").style.color = "black"
  }

  return (
    <div id={styles.howItWorksContainer}>
      <div id={styles.howItWorksLeft}>
        <h1 id={styles.howItWorksTitle}>How It Works</h1>
        <p id={styles.howItWorksParagraph}>
          This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it. This is some text explaining how the product works and all that.  It’s pretty cool and I think that you should use it.
        </p>
        <div id={'how_it_works_selector1'} className={styles.howItWorksSelector} onClick={card1}>
          01. This is the first type of question
        </div>
        <div id={'how_it_works_selector2'} className={styles.howItWorksSelector} onClick={card2}>
          02. This is the second type of question
        </div>
        <div id={'how_it_works_selector3'} className={styles.howItWorksSelector} onClick={card3}>
          03. This is the third type of question
        </div>
        <div  id={'how_it_works_selector4'} className={styles.howItWorksSelector}  onClick={card4}>
          04. This is the fourth type of question
        </div>
      </div>
      <div id={styles.howItWorksRight}>
        <How_It_Works_Card title={card_title} paragraph={card_paragraph} id={styles.howItWorksCard}></How_It_Works_Card>
      </div>
    </div>
  );
}

export default How_It_Works;