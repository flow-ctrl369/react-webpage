import React from "react";
import { useState } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import Card from "./CardComponent.jsx";

function CardData() {
  const [cardFlipped, setCardFlipped] = useState(false);

  function handleClick() {
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
      />

      <Card
        image={image2}
        firstName="Eleanor"
        lastName="Schollum"
        profession="Artist"
        text="I love making people happy with arts, crafts and all recreational art!"
      />
      <Card
        image={image3}
        firstName="Mike"
        lastName="Shaw"
        profession="Technical Lead"
        text="I love helping people find where they fit best in a project!"
      />
      <Card
        image={image4}
        firstName="April"
        lastName="Winnhouse"
        profession="Business Analyst"
        text="I love hunting down what people want through gathering requirements!"
      />
      <Card
        // image={image}
        firstName="Kennith"
        lastName="Muldrock"
        profession="Senior Software Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="Adrianne"
        lastName="Love"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
      <Card
        firstName="John"
        lastName="Mckenna"
        profession="Developer"
        text="I love Full Stack Development!"
      />
    </>
  );
}

export default CardData;
