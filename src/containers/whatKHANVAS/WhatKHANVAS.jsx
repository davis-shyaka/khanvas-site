import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatKHANVAS.css";

const WhatKHANVAS = () => (
  <div className="khanvas__whatkhanvas section__margin" id="whatkhanvas">
    <div className="khanvas__whatkhanvas-feature">
      <Feature
        title="What is KHANVAS"
        text="KHANVAS, often referred to as SHADOW-dom, or SHADOW Lands, is the principle domain and home of the SHADOWS.
However, what has grown to be colloquially acceptable as the borders of KHANVAS is no more than the 4th Sphere alone, but factually speaking, KHANVAS is the bulk of the 7 Spheres entirely.
During the year 7 A.A.A (Ascension of Ancient of Ages), the land was plagued with monstrous entities called Phantoms. Phantoms hunted not only SHADOWS, but all Innate species of KHANVAS nearly to extinction, until in, 56 A.A.A, SHADOWS adopted a judiciary system called ‘The Grand Library’. This system ensured their survival by maintaining their freedom, whilst enforcing their security.
As it stands, the war between SHADOW and Phantom-kind is still being waged till this day, with Wizards and Witches now striking bargains with Phantoms to bring about the annihilation of KHANVAS."
      />
    </div>
    <div className="khanvas__whatkhanvas-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore KHANVAS</p>
    </div>
    <div className="khanvas__whatkhanvas-container">
      <Feature
        title="Innates"
        text="The native species that flock all KHANVAS"
      />
      <Feature
        title="The Grand Library"
        text="The beating heart of Khanvanic society that holds all of KHANVAS together."
      />
      <Feature
        title="The Choosing"
        text="The de facto military academy where 'The Chosen' (designated soldiers of KHANVAS) are trained and selection is held."
      />
    </div>
  </div>
);

export default WhatKHANVAS;
