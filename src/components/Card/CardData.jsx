import React from "react";
import { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/leoimage.jpg";
import Card from "./CardComponent.jsx";

function CardData() {
  const [cardFlipped, setCardFlipped] = useState(false);

  function handleClick() {
    setCardFlipped(cardFlipped);
    console.log(cardFlipped);
  }

  return (
    <>
      <Card
        onClick={handleClick}
        image={image1}
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development. I progress every day even if it's only by 1%!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />

      <Card
        image={image2}
        firstName="Nora"
        lastName="Jensen"
        profession="Artist"
        text="I love making people happy with arts, crafts and all recreational art!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
      <Card
        image={image3}
        firstName="Mike"
        lastName="Shaw"
        profession="Technical Lead"
        text="I love helping people find where they fit best in a project!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
      <Card
        image={image4}
        firstName="April"
        lastName="Winnhouse"
        profession="Business Analyst"
        text="I love hunting down what people want through gathering requirements!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
      <Card
        image={image5}
        firstName="Kennith"
        lastName="Muldrock"
        profession="Senior Software Developer"
        text="I love Full Stack Development!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
      <Card
        image={image6}
        firstName="Adrianne"
        lastName="Love"
        profession="UI/UX Designer"
        text="I love turning thoughts and ideas into reality!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
      <Card
        image={image7}
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
      <Card
        image={image8}
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
        info="This is a little bit of made up dummy data that will be provided to see if this code is working correctly. If it is working then this text will show up underneath props.title"
      />
    </>
  );
}

export default CardData;
