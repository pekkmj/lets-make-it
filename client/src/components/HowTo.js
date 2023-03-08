import React from "react";

const HowTo = () => {
  return (
    <div className="how-to-container">
      <h1 className="about-title">How to Use: Let's Make It</h1>
      <h3 className="about-subheader">Example Search Results</h3>
      <h6 className="about-note">Remember to populate your pantry with ingredients<br />on your profile page to get the best results</h6>
      <img className="about-search" src="https://imgur.com/VlirS7z.png" />
      <h3 className="about-subheader">Tile Colors</h3>
        <div className="example-tiles">
          <h5 className="example-tile recommend">A lot of shared ingredients</h5>
          <h5 className="example-tile semi-recommend">Some shared ingredients</h5>
          <h5 className="example-tile available">Few to none ingredients</h5>
        </div>
      <h3 className="about-subheader">Ingredient Colors</h3>
      <ul>
        <h5 className="selected plain-header">Exact Match</h5>
        <p className="plain-header">The ingredient is in the user's pantry</p>
        <h5 className="semi-selected plain-header">Some Match</h5>
        <p className="plain-header">The ingredient shares similar keywords with a pantry ingredient <br /> but is not an exact match 
        (ex: kosher salt vs. sea salt)</p>
        <h5 className="plain-header">No Match</h5>
        <p className="plain-header">The ingredient is not in the user's pantry</p>
      </ul>
    </div>
  )
}

export default HowTo