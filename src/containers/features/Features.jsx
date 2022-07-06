import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "The Chosen",
    text: "Champions of KHANVAS charged with protecting all SHADOWS and Innate-kind, as well as waging war against Phantoms.",
  },
  {
    title: "Scribes",
    text: "Reserved candidates that maintain the Grand Library and its branches including, The Prayer Forge. Did you know: Almost all Scribes have never left the Grand Library.",
  },
  {
    title: "Expeditors",
    text: "SHADOWS well averse in trade and the movement of goods(sometimes other SHADOWS) mostly because of their profound knowledge of Khanvanian demography. Did you know: The majority of Expeditors are seasoned sailors.",
  },
  {
    title: "Explorers",
    text: "The history markers of KHANVAS, whose prime purpose is to find the origin of Phantoms. Did you know: Explorers never travel alone. At the very least one Chosen accompanies them for security purposes on their expeditions.",
  },
  {
    title: "Firmi",
    text: "Firmi are aggubaly the sole reason behind the creation of trade. They grow the crops and manintain the balance of Jungles. Did you know: Almost all Firmi are Tree Masters.",
  },
  {
    title: "Sunsmiths",
    text: "Tasked with the fabrication of all weapons used by the Chosen and the render of all theoretical prayer-cores that arrive from the Grand Library to their shores. Did you know: Sunsmiths are the most intricate craftspersons in all of KHANVAS.",
  },
  {
    title: "Nevi'im",
    text: "N/A and/or Sealed Records.",
  },
];

const Features = () => (
  <div className="khanvas__features section__padding" id="features">
    <div className="khanvas__features-heading">
      <h1 className="gradient__text">
        Cadres of SHADOWS varrying in duties and roles.
      </h1>
      <p>
        Did you know: All SHADOWS have the indisputable right to choose for
        themselves what cadre they desire to be apart of.
      </p>
    </div>
    <div className="khanvas__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
