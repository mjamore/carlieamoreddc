import * as React from 'react';
import Navigation from '../components/navigation';

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  }
]

// markup
const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Carlie Amore's Website</h1>
    </div>
  )
}

export default IndexPage
