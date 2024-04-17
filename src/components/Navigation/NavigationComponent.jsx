import React from "react";

function NavigationComponent() {
  const linkArr = [
    { name: "Home", link: "https://www.google.com" },
    { name: "The Team", link: "https://www.youtube.com" },
    { name: "Careers", link: "https://findajob.msd.govt.nz/" },
    { name: "Services", link: "https://www.planningcenter.com/services" },
    { name: "Login/Signup", link: "https://www.google.com" },
  ];
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />

      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href={linkArr[0].link}>{linkArr[0].name}</a>
            </li>
            <li>
              <a href={linkArr[1].link}>{linkArr[1].name}</a>
            </li>
            <li>
              <a href={linkArr[2]}>{linkArr[2].name}</a>
            </li>
            <li>
              <a href={linkArr[3].link}>{linkArr[3].name}</a>
            </li>
            <li>
              <a href={linkArr[4].link}>{linkArr[4].name}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavigationComponent;
